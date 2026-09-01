import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

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

vi.mock("@gsap/react", () => ({ useGSAP: Object.assign(() => undefined, { register: vi.fn() }) }));
