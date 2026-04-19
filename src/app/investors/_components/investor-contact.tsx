"use client";

import { FormEvent, useState } from "react";
import { investorContactChannels, investorContactTopics, dataRoomSteps } from "@/content/site";
import { SectionShell } from "../../_components/section-shell";

export function InvestorContact() {
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
      eyebrow="Contact"
      title="Direct lines for pilots, investors, and regulators"
      description="Route diligence, partnership, and media requests without going through generic support queues."
      className="section-aura section-aura--glow"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          {investorContactChannels.map((channel) => (
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
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="mono-label mb-3">Submit a request</p>
          <div className="form-grid">
            <label className="form-field">
              <span>Full name</span>
              <input name="name" required placeholder="Patria Investor" />
            </label>
            <label className="form-field">
              <span>Company / Organization</span>
              <input name="company" required placeholder="Beacon Ventures" />
            </label>
            <label className="form-field">
              <span>Work email</span>
              <input type="email" name="email" required placeholder="team@blox.capital" />
            </label>
            <label className="form-field">
              <span>Topic</span>
              <select name="topic" required defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>
                {investorContactTopics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field col-span-2">
              <span>Message</span>
              <textarea name="message" rows={4} placeholder="What's on your mind?" />
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
            <p className="form-status error">Something went wrong. Try greg@blox.capital directly.</p>
          )}
        </form>
      </div>
    </SectionShell>
  );
}
