import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FaqAccordion from "components/site/FaqAccordion";

describe("FaqAccordion", () => {
  it("expands and collapses answers with an accurate aria state", () => {
    render(<FaqAccordion />);
    const question = screen.getByRole("button", { name: "What can I use Green Compass for today?" });

    expect(question).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/growing knowledge hub/i)).toBeVisible();
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "false");
  });
});
