import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import IndexPage from "../pages/index";
import ExplainerPage from "../pages/explainer";
import ResearchPage from "../pages/research";
import PrivacyPage from "../pages/privacy";
import TermsPage from "../pages/tos";
import SofiaPage from "../pages/sofia";
import { LanguageProvider } from "context/LanguageContext";

const routes = [
  [IndexPage, /Превърни добрите намерения/i],
  [ExplainerPage, /От осъзнаване към действие/i],
  [ResearchPage, /Въглеродната яснота започва/i],
  [PrivacyPage, /Политика за поверителност/i],
  [TermsPage, /Условия за ползване/i],
  [SofiaPage, /От устойчивите политики до практичните решения/i],
];

describe("Bulgarian site routes", () => {
  afterEach(() => window.localStorage.clear());

  it.each(routes)("renders every active page in Bulgarian", (Page, heading) => {
    window.localStorage.setItem("green-compass-site-language", "bg");
    const { unmount } = render(<LanguageProvider><Page /></LanguageProvider>);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    unmount();
  });
});
