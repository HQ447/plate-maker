import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  FileCheck2,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Eyebrow, SectionDivider } from "./_shared";

const guides = [
  [
    "How to replace a number plate in the UK",
    "/guides/how-to-replace-a-number-plate-in-the-uk",
    "Start here",
    CarFront,
  ],
  [
    "Documents needed to buy number plates",
    "/guides/documents-needed-to-buy-number-plates",
    "Before ordering",
    FileCheck2,
  ],
  [
    "Replacement number plate cost: what changes the price",
    "/guides/replacement-number-plate-cost-what-changes-the-price",
    "Pricing",
    Scale,
  ],
  [
    "Same-day dispatch vs next-day delivery",
    "/guides/sameday-dispatch-vs-nextday-delivery",
    "Delivery",
    Truck,
  ],
  [
    "Standard vs 3D vs 4D vs 5D plates",
    "/guides/standard-vs-3d-vs-4d-vs-5d-plates",
    "Compare styles",
    Sparkles,
  ],
  [
    "Number plate MOT failure checklist",
    "/guides/number-plate-mot-failure-checklist",
    "Legal guide",
    ShieldCheck,
  ],
  [
    "Stolen number plates and vehicle cloning",
    "/guides/stolen-number-plates-and-vehicle-cloning",
    "Protection",
    ShieldCheck,
  ],
  [
    "Number plate fines and enforcement",
    "/guides/number-plate-fines-and-enforcement",
    "Know the rules",
    Scale,
  ],
] as const;

export default function GuidesSection() {
  return (
    <section
      id="guides"
      aria-labelledby="guides-heading"
      className="relative isolate overflow-hidden bg-[#080c14] text-white"
    >
      <Image
        src="/images/styles/4d.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover object-center opacity-[.06]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#080c14]/90" />
      <SectionDivider fill="#080c14" shape="valley" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow dark>Helpful guides</Eyebrow>
            <h2
              id="guides-heading"
              className="max-w-[650px] text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em]"
            >
              Make the right choice{" "}
              <span className="text-gradient-blue">with confidence.</span>
            </h2>
          </div>
          <Link
            href="/guides"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-xs font-bold text-white transition hover:border-[#f3c544]/50 hover:bg-white/[.1] sm:self-auto"
          >
            All guides{" "}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map(([title, href, tag, Icon], index) => (
            <Link
              key={title}
              href={href}
              className={`glass-card glass-card-dark group min-h-[190px] rounded-[1.3rem] border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f3c544]/45 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.07] text-[#f3c544]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[9px] font-black uppercase tracking-[.16em] text-slate-500">
                  {tag}
                </span>
              </div>
              <h3 className="mt-8 max-w-[330px] text-[16px] lg:text-[19px] font-extrabold leading-snug text-white">
                {title}
              </h3>
              <span className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-[#f3c544]">
                Read guide{" "}
                <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
