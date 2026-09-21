import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithI18n } from "@/test/render";
import { Faq } from "./Faq";

describe("FAQ", () => {
  it("exposes answers through an accordion", () => {
    renderWithI18n(<Faq/>);
    const question = screen.getByRole("button", { name: /Do I need to pay to use Alvara Trade/i });
    expect(question).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/explore its core workflow for free/i)).toBeInTheDocument();
  });
});
