import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Navbar from "components/Navbar";
import { LanguageProvider } from "context/LanguageContext";

describe("site language switcher", () => {
  afterEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
  });

  it("switches the full navigation to Bulgarian and remembers the choice", async () => {
    const view = render(<LanguageProvider><Navbar /></LanguageProvider>);

    fireEvent.click(screen.getAllByRole("button", { name: "Български" })[0]);
    await waitFor(() => expect(screen.getAllByRole("link", { name: "Функции" }).length).toBeGreaterThan(0));
    expect(document.documentElement.lang).toBe("bg");
    expect(window.localStorage.getItem("green-compass-site-language")).toBe("bg");

    view.unmount();
    render(<LanguageProvider><Navbar /></LanguageProvider>);
    expect(screen.getAllByRole("link", { name: "Как работи" }).length).toBeGreaterThan(0);
  });
});
