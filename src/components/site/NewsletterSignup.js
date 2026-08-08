import React, { useState } from "react";
import subscribeToNewsletter from "util/newsletter";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });
    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setEmail("");
      setStatus({ state: "success", message: "You’re on the list. We’ll keep it useful." });
    } else {
      setStatus({ state: "error", message: result.message || "We couldn’t subscribe you just now. Please try again." });
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-7" noValidate>
      <label htmlFor="newsletter-email" className="field-label text-white">Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="field-control border-white/20 bg-white/10 text-white placeholder:text-white/45"
        />
        <button type="submit" className="button-primary shrink-0 bg-moss text-ink hover:bg-white" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Joining…" : "Follow the journey"}
        </button>
      </div>
      {status.message && (
        <p role="status" className={`form-message ${status.state === "success" ? "bg-moss/15 text-moss" : "bg-red-100 text-red-800"}`}>
          {status.message}
        </p>
      )}
      <p className="mt-3 text-sm text-white/50">Occasional updates. Unsubscribe whenever you like.</p>
    </form>
  );
}

export default NewsletterSignup;
