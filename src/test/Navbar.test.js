import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "components/Navbar";

describe("Navbar", () => {
  it("exposes the primary destinations and an accessible mobile menu", () => {
    render(<Navbar />);

    expect(screen.getAllByRole("link", { name: "Features" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "How it works" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Research" }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute("href", "#main-content");

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});
