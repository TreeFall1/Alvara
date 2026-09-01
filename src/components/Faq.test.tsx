import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Faq } from "./Faq";

describe("FAQ", () => {
  it("exposes answers through an accordion", () => {
    render(<Faq/>);
    const question = screen.getByRole("button", { name: /Where is Sharplink listed/i });
    expect(question).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Nasdaq under the symbol SBET/i)).toBeInTheDocument();
  });
});
