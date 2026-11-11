import React, { useEffect, useId, useRef, useState } from "react";
import { showError, showLoading, showSuccess, closeLoading } from "../../utils/swal";
import "./Landing.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function InquiryDialog({ open, onClose }) {
  const titleId = useId();
  const firstFieldRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 40);

    const onKeyDown = (event) => {
      if (event.key === "Escape" && !submitting) onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, submitting]);

  if (!open) return null;

  const updateField = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      showError("Please fill in all fields.");
      return;
    }

    try {
      setSubmitting(true);
      showLoading("Sending your message...");

      const response = await fetch("/api/site/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      closeLoading();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Could not send your message.");
      }

      setForm(initialForm);
      onClose();
      showSuccess("Message sent successfully");
    } catch (error) {
      closeLoading();
      showError(error.message || "Could not send your message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="inquiry-dialog" role="presentation">
      <button
        type="button"
        className="inquiry-dialog__backdrop"
        aria-label="Close dialog"
        onClick={() => !submitting && onClose()}
      />

      <div
        className="inquiry-dialog__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="inquiry-dialog__glow" aria-hidden="true" />

        <header className="inquiry-dialog__header">
          <div className="inquiry-dialog__brand">
            <img src="/warom-logo.png" alt="" />
            <div>
              <p className="inquiry-dialog__eyebrow">WAROM</p>
              <h2 id={titleId}>Talk to us</h2>
            </div>
          </div>
          <button
            type="button"
            className="inquiry-dialog__close"
            onClick={() => !submitting && onClose()}
            aria-label="Close"
            disabled={submitting}
          >
            ✕
          </button>
        </header>

        <p className="inquiry-dialog__lead">
          Share a partnership note, press request, or question. We read every
          message.
        </p>

        <form className="inquiry-dialog__form" onSubmit={handleSubmit}>
          <div className="inquiry-dialog__row">
            <label className="inquiry-field">
              <span>Name</span>
              <input
                ref={firstFieldRef}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateField("name")}
                required
                disabled={submitting}
              />
            </label>
            <label className="inquiry-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={updateField("email")}
                required
                disabled={submitting}
              />
            </label>
          </div>

          <label className="inquiry-field">
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="What is this about?"
              value={form.subject}
              onChange={updateField("subject")}
              required
              disabled={submitting}
            />
          </label>

          <label className="inquiry-field">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={form.message}
              onChange={updateField("message")}
              required
              disabled={submitting}
            />
          </label>

          <div className="inquiry-dialog__actions">
            <button
              type="button"
              className="inquiry-dialog__secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inquiry-dialog__primary"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
