import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => cleanup());

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserverMock { observe() {} unobserve() {} disconnect() {} }
class IntersectionObserverMock { observe() {} unobserve() {} disconnect() {} }
Object.defineProperty(globalThis, "ResizeObserver", { value: ResizeObserverMock });
Object.defineProperty(globalThis, "IntersectionObserver", { value: IntersectionObserverMock });
Object.defineProperty(window, "scrollTo", { value: vi.fn(), writable: true });
Object.defineProperty(globalThis, "requestAnimationFrame", { value: vi.fn(() => 0), writable: true });
Object.defineProperty(globalThis, "cancelAnimationFrame", { value: vi.fn(), writable: true });

vi.mock("@gsap/react", () => ({ useGSAP: Object.assign(() => undefined, { register: vi.fn() }) }));
vi.mock("gsap/ScrollTrigger", () => ({ ScrollTrigger: { register: vi.fn(), create: vi.fn() } }));
vi.mock("next/navigation", () => ({ usePathname: () => "/en" }));
