"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ContactConfig } from "@/lib/content";

interface ContactFormProps {
  config: ContactConfig;
}

export function ContactForm({ config }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <h2 className="text-2xl font-semibold text-ink">Thanks for reaching out</h2>
        <p className="mt-3 text-muted">
          Your message has been sent. We&apos;ll be in touch soon.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        {config.fields.map((field) => {
          if (field.input_type === "html") {
            return (
              <h2
                key={field.name + field.placeholder}
                className="text-xl font-semibold text-ink"
                dangerouslySetInnerHTML={{ __html: field.placeholder }}
              />
            );
          }

          if (field.input_type === "textarea") {
            return (
              <div key={field.name} className="relative">
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  {field.placeholder}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={6}
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required={field.required === true}
                />
              </div>
            );
          }

          if (field.input_type === "checkbox") {
            return (
              <label
                key={field.name + field.placeholder}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <input
                  type="checkbox"
                  name={field.name}
                  value={field.placeholder}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  required={field.required === "required"}
                />
                <span dangerouslySetInnerHTML={{ __html: field.placeholder }} />
              </label>
            );
          }

          if (field.input_type === "submit") {
            return (
              <Button
                key={field.name}
                type="submit"
                className="w-full sm:w-auto"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : field.placeholder}
              </Button>
            );
          }

          const inputId = `${field.name}-${field.placeholder}`;
          return (
            <div key={inputId} className="relative">
              <label
                htmlFor={inputId}
                className="mb-2 block text-sm font-medium text-ink"
              >
                {field.placeholder}
              </label>
              <input
                id={inputId}
                type={field.input_type}
                name={field.name}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required={field.required === true}
              />
            </div>
          );
        })}

        {status === "error" ? (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong. Please try again or email us directly.
          </p>
        ) : null}
      </form>
    </Card>
  );
}
