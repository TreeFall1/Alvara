import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithI18n } from "@/test/render";
import { Header } from "./Header";

describe("Header", () => {
  it("opens and closes the accessible mobile menu", () => {
    renderWithI18n(<Header/>);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(toggle);
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");
    expect(closeButton).toHaveAttribute("aria-controls", "mobile-navigation");
    expect(screen.getAllByText("How It Works").length).toBeGreaterThan(0);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the selected locale and all language options", () => {
    renderWithI18n(<Header/>, { locale: "uk" });
    expect(screen.getByRole("button", { name: "Відкрити меню" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Українська" }).find((link) => link.getAttribute("aria-current") === "page")).toBeDefined();
  });
});
