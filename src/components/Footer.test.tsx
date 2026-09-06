import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithI18n } from "@/test/render";
import { Footer } from "./Footer";

vi.mock("./WebGLWordmark", () => ({ WebGLWordmark: () => <div data-testid="wordmark"/> }));

describe("Footer CTA", () => {
  it("links to Telegram and presents the first-login reward", () => {
    renderWithI18n(<Footer/>);
    expect(screen.getByText(/receive 100 \$ALVARA points/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open Alvara Trade in Telegram/i })).toHaveAttribute("href", expect.stringMatching(/^https:\/\/t\.me\//));
  });
});
