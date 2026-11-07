import { Gem, Headset, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: ShieldCheck, title: "Professional Installation", text: "Careful, tidy work to a high standard." },
  { icon: Gem, title: "Quality Equipment", text: "Dependable equipment chosen for your property." },
  { icon: SlidersHorizontal, title: "Customized Solutions", text: "Planned around your needs and budget." },
  { icon: Headset, title: "Reliable Support", text: "Help before and after installation." },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden bg-navy pt-16 text-white md:pt-24">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
      <div className="container-x relative px-5 sm:px-8">
        <div id="why-title"><SectionHeading tone="dark" title="Why" accent="Choose Us?" description="We go beyond installation: we deliver lasting security and value." /></div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="reveal rounded-3xl bg-white p-5 text-center text-navy shadow-xl transition hover:-translate-y-1">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-navy text-gold"><Icon className="size-7" aria-hidden="true" /></span>
              <h3 className="mt-4 text-base font-extrabold leading-snug">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-16 rounded-t-[3rem] bg-gold px-5 py-10 text-center text-2xl font-extrabold leading-snug text-deep sm:text-3xl">
        Secure Today.<br />Live Better Tomorrow.
      </div>
    </section>
  );
}
