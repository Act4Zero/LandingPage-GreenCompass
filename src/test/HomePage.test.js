import React from "react";
import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IndexPage from "../pages/index";

describe("Home page product framing", () => {
  it("keeps the hero visible and separates current capabilities from the roadmap", () => {
    delete globalThis.IntersectionObserver;
    render(<IndexPage />);
    const hero = screen.getByRole("heading", { level: 1, name: /make greener choices/i });
    expect(hero).toBeVisible();
    expect(hero.className).not.toContain("opacity-0");
    expect(screen.getByText("Available today")).toBeVisible();
    expect(screen.getByText("Coming next")).toBeVisible();
    expect(screen.getByText(/not a promise of what Green Compass will achieve/i)).toBeVisible();
    expect(screen.getByText("Guiding principle")).toBeVisible();
    expect(screen.getByText("Progress over perfection").closest("a, button")).toBeNull();
  });

  it("disables non-essential motion when reduced motion is requested", () => {
    const styles = readFileSync("src/styles/global.css", "utf8");
    expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styles).toMatch(/animation-duration:\s*0\.01ms\s*!important/);
    expect(styles).toMatch(/transition-duration:\s*0\.01ms\s*!important/);
  });
});
