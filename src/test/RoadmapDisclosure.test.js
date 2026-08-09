import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { describe, expect, it } from "vitest";
import RoadmapDisclosure from "components/site/RoadmapDisclosure";

describe("RoadmapDisclosure", () => {
  it("reveals and hides planning-stage context accessibly", () => {
    render(
      <RoadmapDisclosure
        icon={MapPinIcon}
        index={0}
        title="Local green discovery"
        summary="Find lower-impact places."
        stage="Discovery"
        exploring="A useful local directory."
        question="How should coverage expand?"
      />,
    );

    const toggle = screen.getByRole("button", { name: /local green discovery/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("A useful local directory.")).not.toBeVisible();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("A useful local directory.")).toBeVisible();
    expect(screen.getByText("How should coverage expand?")).toBeVisible();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
