import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import NewsletterSignup from "components/site/NewsletterSignup";
import ContactForm from "components/site/ContactForm";
import subscribeToNewsletter from "util/newsletter";
import submitContactForm from "util/contact";

vi.mock("util/newsletter", () => ({ default: vi.fn() }));
vi.mock("util/contact", () => ({ default: vi.fn() }));

describe("marketing forms", () => {
  beforeEach(() => vi.clearAllMocks());

  it("shows newsletter success and provider errors", async () => {
    subscribeToNewsletter.mockResolvedValueOnce({ success: true });
    const { unmount } = render(<NewsletterSignup />);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "reader@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Follow the journey" }));
    expect(await screen.findByText(/on the list/i)).toBeVisible();
    unmount();

    subscribeToNewsletter.mockResolvedValueOnce({ success: false, message: "Newsletter signup is temporarily unavailable." });
    render(<NewsletterSignup />);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "reader@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Follow the journey" }));
    expect(await screen.findByText(/temporarily unavailable/i)).toBeVisible();
  });

  it("submits only the explicit contact fields", async () => {
    submitContactForm.mockResolvedValueOnce({ success: true });
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada" } });
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "ada@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => expect(submitContactForm).toHaveBeenCalledWith({ name: "Ada", email: "ada@example.com", message: "Hello" }));
    expect(await screen.findByText(/on its way/i)).toBeVisible();
  });
});
