import React from "react";
import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IndexPage from "../pages/index";

describe("Home page product framing", () => {
  it("keeps the hero visible and clearly labels current product capabilities", () => {
    delete globalThis.IntersectionObserver;
    render(<IndexPage />);
    const hero = screen.getByRole("heading", { level: 1, name: /turn good intentions/i });
    expect(hero).toBeVisible();
    expect(hero.className).not.toContain("opacity-0");
    expect(screen.getAllByText("In the app").length).toBeGreaterThan(0);
    expect(screen.getByText("Sign-in required")).toBeVisible();
    expect(screen.getByText("Pilot rollout")).toBeVisible();
    expect(screen.getByText(/not a promise of what Green Compass will achieve/i)).toBeVisible();
    expect(screen.getByText("One connected journey")).toBeVisible();
  }, 10000);

  it("disables non-essential motion when reduced motion is requested", () => {
    const styles = readFileSync("src/styles/global.css", "utf8");
    expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styles).toMatch(/animation-duration:\s*0\.01ms\s*!important/);
    expect(styles).toMatch(/transition-duration:\s*0\.01ms\s*!important/);
  });
});
