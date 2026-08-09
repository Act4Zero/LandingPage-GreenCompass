import React from "react";
import { render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import IndexPage from "../pages/index";
import ExplainerPage from "../pages/explainer";
import ResearchPage from "../pages/research";
import PrivacyPage from "../pages/privacy";
import TermsPage from "../pages/tos";

const routes = [
  ["/", IndexPage, "Green Compass — Make greener choices with less guesswork"],
  ["/explainer", ExplainerPage, "How Green Compass works — From awareness to action"],
  ["/research", ResearchPage, "Research — Carbon-footprint feedback and behavior"],
  ["/privacy", PrivacyPage, "Privacy Policy - Green Compass"],
  ["/tos", TermsPage, "Terms of Service - Green Compass"],
];

describe("route metadata", () => {
  afterEach(() => {
    delete globalThis.__testRoute;
  });

  it.each(routes)("publishes unique metadata for %s", async (route, Page, title) => {
    globalThis.__testRoute = route;
    const { unmount } = render(<Page />);

    await waitFor(() => expect(document.title).toBe(title));
    expect(document.querySelector('meta[name="description"]')?.content).toBeTruthy();
    expect(document.querySelector('link[rel="canonical"]')?.href).toBe(
      `https://greencompass.app${route}`,
    );
    expect(document.querySelector('meta[property="og:image"]')?.content).toBe(
      "https://greencompass.app/og.png",
    );
    unmount();
  });
});
