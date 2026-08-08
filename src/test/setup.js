import "@testing-library/jest-dom/vitest";
import React from "react";
import { createPortal } from "react-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => cleanup());

vi.mock("next/image", () => ({
  default: ({ priority, ...props }) => React.createElement("img", props),
}));

vi.mock("next/head", () => ({
  default: ({ children }) => createPortal(children, document.head),
}));

vi.mock("next/router", () => ({
  useRouter: () => {
    const asPath = globalThis.__testRoute || "/";
    return { pathname: asPath, asPath };
  },
  default: { events: { on: vi.fn(), off: vi.fn() } },
}));
