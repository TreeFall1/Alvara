import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithI18n } from "@/test/render";
import { Footer } from "./Footer";

vi.mock("./WebGLWordmark", () => ({ WebGLWordmark: () => <div data-testid="wordmark"/> }));

describe("Footer CTA", () => {
  it("links to Telegram and keeps the CTA focused on the bot", () => {
    renderWithI18n(<Footer/>);
    expect(screen.getByText(/review a live market setup/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open Alvara Trade in Telegram/i })).toHaveAttribute("href", expect.stringMatching(/^https:\/\/t\.me\//));
  });
});
