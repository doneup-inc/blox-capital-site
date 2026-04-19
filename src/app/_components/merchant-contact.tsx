"use client";

import { FormEvent, useState } from "react";
import { contactSection, contactTopics } from "@/content/site";
import { SectionShell } from "./section-shell";

export function MerchantContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <SectionShell
      id="contact"
      eyebrow={contactSection.eyebrow}
      title={contactSection.title}
      description={contactSection.subtitle}
      className="section-aura section-aura--glow"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          {contactSection.channels.map((channel) => (
            <div key={channel.label} className="contact-card">
              <div>
                <p className="text-base font-semibold text-white">{channel.label}</p>
                <p className="text-sm text-slate-300/85">{channel.description}</p>
              </div>
              <a className="link-accent" href={`mailto:${channel.email}`}>
                {channel.email}
              </a>
            </div>
          ))}
          {/* Investor link */}
          <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-sm text-slate-400">
              Looking for compliance dossiers, licensing status, or investor materials?
            </p>
            <a
              href="/investors"
              className="mt-2 inline-block text-sm font-medium link-accent"
            >
              Visit the investor page →
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="mono-label mb-3">Send a message</p>
          <div className="form-grid">
            <label className="form-field">
              <span>Name</span>
              <input name="name" required placeholder="Your name" />
            </label>
            <label className="form-field">
              <span>Business / Project</span>
              <input name="company" placeholder="Your business or project" />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@example.com" />
            </label>
            <label className="form-field">
              <span>I'm interested in…</span>
              <select name="topic" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {contactTopics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field col-span-2">
              <span>Message</span>
              <textarea name="message" rows={4} placeholder="Tell us what you're working on…" />
            </label>
          </div>
          <button
            type="submit"
            className="cta-primary mt-2 w-full text-center"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "success" && (
            <p className="form-status success">Sent — we'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="form-status error">Something went wrong. Email greg@blox.capital directly.</p>
          )}
        </form>
      </div>
    </SectionShell>
  );
}
