import { site } from "@/config/site";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Alcomm Securities, I would like to enquire about your services.";

/** Builds a wa.me link using the configured number and a prefilled message. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const number = site.contact.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
