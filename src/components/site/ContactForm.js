import React, { useState } from "react";
import submitContactForm from "util/contact";
import { useLanguage } from "context/LanguageContext";

const emptyForm = { name: "", email: "", message: "" };

function ContactForm() {
  const { language } = useLanguage();
  const copy = language === "bg" ? {
    name: "Име", email: "Имейл адрес", message: "Съобщение", loading: "Изпращане...", button: "Изпрати",
    success: "Благодарим. Съобщението ти е изпратено.", error: "Не успяхме да изпратим съобщението. Опитай отново.",
  } : {
    name: "Name", email: "Email address", message: "Message", loading: "Sending...", button: "Send message",
    success: "Thanks. Your message is on its way.", error: "We couldn’t send your message. Please try again.",
  };
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });
    const result = await submitContactForm(form);
    if (result.success) {
      setForm(emptyForm);
      setStatus({ state: "success", message: copy.success });
    } else {
      setStatus({ state: "error", message: result.message || copy.error });
    }
  };

  return (
    <form onSubmit={onSubmit} className="editorial-card" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">{copy.name}</label>
          <input id="contact-name" name="name" type="text" maxLength={100} value={form.name} onChange={update} className="field-control" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label">{copy.email}</label>
          <input id="contact-email" name="email" type="email" required maxLength={254} value={form.email} onChange={update} className="field-control" autoComplete="email" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-message" className="field-label">{copy.message}</label>
        <textarea id="contact-message" name="message" required maxLength={3000} rows={6} value={form.message} onChange={update} className="field-control resize-y" />
      </div>
      <button type="submit" className="button-primary mt-6" disabled={status.state === "loading"}>
        {status.state === "loading" ? copy.loading : copy.button}
      </button>
      {status.message && (
        <p role="status" className={`form-message ${status.state === "success" ? "bg-green-lightest text-forest" : "bg-red-100 text-red-800"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
