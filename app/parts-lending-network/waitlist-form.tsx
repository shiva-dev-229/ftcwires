"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon } from "../_lib/ui";

export default function WaitlistForm() {
  const [team, setTeam] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!email) return;

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc5kbrU3p_z2ook_jF-oD3T51uoKzib1E1_FqJYhMxFeDOp4g/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.1098718976": team,
          "entry.316249258": email,
        }).toString(),
      }
    );

    setSubmitted(true);
  } catch (err) {
    console.error(err);
  }
}

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-2xl border px-6 py-8 text-center"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <span
          className="grid h-10 w-10 place-items-center rounded-full"
          style={{
            background:
              "color-mix(in oklab, var(--foreground) 8%, transparent)",
          }}
        >
          <CheckIcon className="h-5 w-5 text-foreground" />
        </span>
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          You&rsquo;re on the list.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          We&rsquo;ll email <span className="text-foreground">{email}</span>{" "}
          when early access opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border p-2 backdrop-blur-sm"
      style={{
        borderColor: "var(--border)",
        background:
          "color-mix(in oklab, var(--foreground) 3%, transparent)",
      }}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          inputMode="numeric"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Team #"
          className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-subtle focus:border-foreground/30 sm:w-32"
          style={{ borderColor: "var(--border)" }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@team.org"
          className="flex-1 rounded-xl border bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-subtle focus:border-foreground/30"
          style={{ borderColor: "var(--border)" }}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.08) inset, 0 12px 28px -10px rgba(0,0,0,0.5)",
          }}
        >
          Stay updated
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="px-2 pb-1 pt-2 text-[11px] text-subtle">
        We&rsquo;ll email about any updates!
      </p>
    </form>
  );
}