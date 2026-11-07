"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/whatsapp";

const propertyTypes = ["Residential", "Commercial", "Estate / Multi-unit", "Other"];
const serviceOptions = [...services.map((s) => s.title), "Other / Not sure"];

interface Values { name: string; phone: string; email: string; service: string; property: string; message: string }
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const empty: Values = { name: "", phone: "", email: "", service: "", property: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\+?[\d\s()-]{7,20}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please choose a service.";
  if (!v.property) e.property = "Please choose a property type.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label} <span aria-hidden="true" className="text-red-600">*</span>
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const uid = useId();
  const [values, setValues] = useState<Values>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const id = (k: keyof Values) => `${uid}-${k}`;
  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const a11y = (k: keyof Values) => ({ id: id(k), name: k, "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${id(k)}-error` : undefined }) as const;

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Values)[])[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    // Honeypot: real visitors never fill this hidden field.
    if (new FormData(ev.currentTarget).get("_gotcha")) return;

    if (!site.formEndpoint) {
      setStatus("unconfigured");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _subject: `Quote request: ${values.service}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  const waSummary = `Hello Alcomm Securities, I would like a quote.\nName: ${values.name}\nService: ${values.service}\nProperty: ${values.property}\n${values.message}`;

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center text-navy shadow-xl">
        <CheckCircle2 className="mx-auto size-12 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-semibold">Thank you, your request has been sent.</h3>
        <p className="mt-2 text-muted">We will get back to you as soon as we can.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-6">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 text-navy shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label="Full Name" error={errors.name}>
          <input {...a11y("name")} value={values.name} onChange={set("name")} type="text" autoComplete="name" placeholder="Your full name" className="field" />
        </Field>
        <Field id={id("phone")} label="Phone Number" error={errors.phone}>
          <input {...a11y("phone")} value={values.phone} onChange={set("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="Your phone number" className="field" />
        </Field>
        <div className="sm:col-span-2">
          <Field id={id("email")} label="Email Address" error={errors.email}>
            <input {...a11y("email")} value={values.email} onChange={set("email")} type="email" autoComplete="email" placeholder="you@example.com" className="field" />
          </Field>
        </div>
        <Field id={id("service")} label="Service Required" error={errors.service}>
          <select {...a11y("service")} value={values.service} onChange={set("service")} className="field">
            <option value="">Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field id={id("property")} label="Property Type" error={errors.property}>
          <select {...a11y("property")} value={values.property} onChange={set("property")} className="field">
            <option value="">Select property type</option>
            {propertyTypes.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id={id("message")} label="Message" error={errors.message}>
            <textarea {...a11y("message")} value={values.message} onChange={set("message")} rows={4} placeholder="Tell us about your property and what you need" className="field min-h-32 py-3" />
          </Field>
        </div>
      </div>
      <div className="hidden" aria-hidden="true"><label>Leave this empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>

      {status === "error" && (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800"><AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />Sorry, your request could not be sent. Please try again, or contact us on WhatsApp or by phone.</p>
      )}
      {status === "unconfigured" && (
        <div role="alert" className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          <p className="flex items-start gap-2"><AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />Online quote requests are not available yet, and nothing has been sent. Please contact us directly instead.</p>
          {site.contact.whatsapp && <a href={whatsappUrl(waSummary)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3 w-full sm:w-auto"><MessageCircle className="size-4" aria-hidden="true" />Send this request on WhatsApp</a>}
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-6 w-full">
        {status === "submitting" ? <><Loader2 className="size-4 animate-spin" aria-hidden="true" />Sending…</> : "Request a Quote"}
      </button>
    </form>
  );
}
