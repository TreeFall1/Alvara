import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer";

vi.mock("./WebGLWordmark", () => ({ WebGLWordmark: () => <div data-testid="wordmark"/> }));

describe("Footer newsletter", () => {
  it("validates locally and returns a success state without navigation", () => {
    render(<Footer/>);
    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "invalid" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign up/i }));
    expect(screen.getByRole("status")).toHaveTextContent("valid email");
    fireEvent.change(input, { target: { value: "hello@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign up/i }));
    expect(screen.getByRole("status")).toHaveTextContent("on the list");
  });
});
