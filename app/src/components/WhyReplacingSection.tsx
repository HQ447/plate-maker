"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Bike, Hammer, Search, Square, Sun } from "lucide-react";

const reasons = [
  { id: "reason-cracked", icon: Hammer, title: "Cracked or damaged", description: "A broken plate can be hard to read and may not meet the legal display requirements.", href: "/guides/damaged-number-plate-repair-or-replace", image: "/images/reasons/cracked.jpg", imageAlt: "Cracked and broken UK number plate showing AB12" },
  { id: "reason-faded", icon: Sun, title: "Faded, or a plate query at an MOT", description: "Worn backing or characters that are hard to read are a common reason to replace a plate.", href: "/guides/faded-or-peeling-number-plates-and-mot-risk", image: "/images/reasons/faded.jpg", imageAlt: "Sun-bleached faded UK number plate AB12 CDE" },
  { id: "reason-stolen", icon: AlertTriangle, title: "Stolen", description: "Report it to the police first, then order replacements.", href: "/guides/stolen-number-plates-and-vehicle-cloning", image: "/images/reasons/stolen.jpg", imageAlt: "Empty number plate holder on car bumper" },
  { id: "reason-lost", icon: Search, title: "Lost", description: "Order just the plate you need.", href: "/guides/lost-number-plate-what-to-do-next", image: "/images/reasons/lost.jpg", imageAlt: "Lost UK number plate AB12 CDE lying on roadside gravel" },
  { id: "reason-single", icon: Square, title: "Only one plate needs replacing", description: "Order a single plate and tell us the size and style of the one you’re keeping. We can’t guarantee an exact match to a plate made by a different supplier.", href: "/guides/single-front-or-rear-number-plate-when-to-buy-one", image: "/images/reasons/single.jpg", imageAlt: "Rear of black car showing a single fresh UK yellow number plate" },
  { id: "reason-trailer", icon: Bike, title: "A bike rack or trailer hides your plate", description: "A trailer must show the same plate as the vehicle towing it, and a plate must not be obscured.", href: "/guides/bike-rack-and-trailer-number-plates-different-rules", image: "/images/reasons/trailer.jpg", imageAlt: "Car with bike rack on tow bar showing UK number plate on trailer board" },
];

type Reason = (typeof reasons)[number];

function ReasonCard({ id, icon: Icon, title, description, href, image, imageAlt }: Reason) {
  return (
    <Link id={id} href={href} aria-label={title} className="glass-card glass-card-light group flex min-h-[255px] flex-col overflow-hidden rounded-2xl border border-white/70 shadow-[0_8px_24px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,.16)]">
      <div className="relative h-28 shrink-0 overflow-hidden bg-slate-100 sm:h-32">
        <Image src={image} alt={imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
        <span className="absolute bottom-[11px] left-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-white text-[#c89612] shadow-lg transition group-hover:scale-110"><Icon className="h-4 w-4" /></span>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-6 sm:p-5 sm:pt-6">
        <h3 className="text-[15px] font-extrabold leading-snug tracking-[-.02em] text-slate-950">{title}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-5 text-slate-500">{description}</p>
        <span className="mt-4 flex h-8 w-8 items-center justify-center self-end rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition group-hover:border-[#f3c544] group-hover:bg-[#f3c544] group-hover:text-slate-950"><ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
      </div>
    </Link>
  );
}

export default function WhyReplacingSection() {
  return (
    <section aria-labelledby="why-replacing-heading" className="relative bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] text-slate-950">
      <div className="section-divider section-divider-light" aria-hidden="true"><svg viewBox="0 0 1440 52" preserveAspectRatio="none"><path d="M0 0H380L720 52L1060 0H1440V52H0Z" fill="#f8fafc" /></svg></div>
      <div className="mx-auto max-w-[1280px] px-5 pb-22 pt-6 sm:px-8 lg:px-10 ">
        <div className="mb-7 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-12">
          <div>
            <div className="mb-3 flex items-center text-[11px] font-bold uppercase tracking-[.18em] text-[#c89612]">Common reasons</div>
            <h2 id="why-replacing-heading" className="max-w-[620px] text-[clamp(2.05rem,4vw,3.25rem)] font-black leading-[1.04] tracking-[-.05em] text-slate-950">Why are you replacing <span className="text-[#c89612]">your plates?</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500 lg:pb-1">From damage to loss or an MOT failure, there are many reasons you might need new number plates. Find your reason below and get the right information.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">{reasons.map((reason) => <ReasonCard key={reason.id} {...reason} />)}</div>
      </div>
    </section>
  );
}
