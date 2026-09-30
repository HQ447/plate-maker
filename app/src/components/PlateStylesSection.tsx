"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const plateStyles = [
  {
    id: "style-standard",
    name: "Standard (Legal)",
    description: "Flat printed characters",
    priceFrom: "£12.49",
    pairPrice: "£24.98",
    href: "/standard-number-plates",
    image: "/images/styles/standard.jpg",
    imageAlt: "Standard UK number plate AB12",
  },
  {
    id: "style-3d",
    name: "3D gel",
    description: "Raised, domed resin characters",
    priceFrom: "£19.95",
    pairPrice: "£39.90",
    href: "/3d-number-plates",
    image: "/images/styles/3d-gel.jpg",
    imageAlt: "3D gel UK number plate AB12",
  },
  {
    id: "style-4d",
    name: "4D",
    description: "Laser-cut acrylic characters",
    priceFrom: "£19.95",
    pairPrice: "£39.90",
    href: "/4d-number-plates",
    image: "/images/styles/4d.jpg",
    imageAlt: "4D laser-cut UK number plate AB12",
  },
  {
    id: "style-5d",
    name: "5D",
    description: "Acrylic characters with a gel layer",
    priceFrom: "£34.95",
    pairPrice: "£69.90",
    href: "/5d-number-plates",
    image: "/images/styles/5d.jpg",
    imageAlt: "5D premium UK number plate AB12 yellow",
    badge: "Popular",
  },
  {
    id: "style-ghost",
    name: "Ghost",
    description: "A distinctive styled character finish",
    priceFrom: "£34.95",
    pairPrice: "£69.90",
    href: "/ghost-number-plates",
    image: "/images/styles/ghost.jpg",
    imageAlt: "Ghost carbon-look UK number plate AB12",
  },
  {
    id: "style-bevel",
    name: "Bevel",
    description: "Angled, diamond-cut character edges",
    priceFrom: "£39.95",
    pairPrice: "£79.90",
    href: "/bevel-number-plates",
    image: "/images/styles/bevel.jpg",
    imageAlt: "Bevel diamond-cut UK number plate AB12",
    badge: "Premium",
  },
];

const alsoMadeFor = [
  ["Motorcycle", "/motorcycle-number-plates"],
  ["Oversized", "/oversized-number-plates"],
] as const;

export default function PlateStylesSection() {
  return (
    <section
      aria-labelledby="plate-styles-heading"
      className="plate-styles relative isolate overflow-hidden bg-[#080c14] text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_center_bottom,rgba(243,197,68,.12),transparent_68%)]" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-16">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center text-[11px] font-bold uppercase tracking-[.2em] text-[#f3c544]">
              Plate styles
            </div>
            <h2
              id="plate-styles-heading"
              className="text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em] text-white"
            >
              Choose your <span className="text-gradient-yellow">style.</span>
            </h2>
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-slate-400">
              Standard, 3D, 4D, 5D, Ghost and Bevel finishes, made to order and
              priced per plate.
            </p>
          </div>
          <Link
            id="styles-view-all-btn"
            href="/plate-styles"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-xs font-bold text-white transition hover:border-[#f3c544]/50 hover:bg-white/[.1] sm:self-auto"
          >
            View all styles{" "}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {plateStyles.map((style, index) => (
            <Link
              key={style.id}
              id={style.id}
              href={style.href}
              aria-label={`${style.name} plates from ${style.priceFrom}`}
              className={`glass-card glass-card-dark group relative flex min-h-[350px] flex-col overflow-hidden rounded-[1.45rem] border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#f3c544]/55 ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : index === 2 ? "lg:col-span-3" : "lg:col-span-4"}`}
            >
              <div className="relative mx-4 mt-4 h-[154px] shrink-0 overflow-hidden rounded-[1rem] border border-white/[.09] bg-[#081522] shadow-[inset_0_0_24px_rgba(243,197,68,.08)] sm:h-[166px]">
                <Image
                  src={style.image}
                  alt={style.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101c]/75 via-transparent to-white/[.07]" />
                {style.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#f3c544] px-2.5 py-1 text-[9px] font-black uppercase tracking-[.14em] text-slate-950">
                    {style.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                <h3 className="text-xl font-extrabold leading-tight tracking-[-.03em] text-white">
                  {style.name}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-300">
                  {style.description}
                </p>
                <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-base font-bold text-[#f3c544]">
                    <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">
                      From, 1 plate
                    </span>
                    <span className="text-xl lg:text-2xl">
                      {style.priceFrom}{" "}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      · pair {style.pairPrice}
                    </span>
                  </p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f3c544]/35 bg-[#f3c544]/10 text-[#f3c544] transition group-hover:bg-[#f3c544] group-hover:text-slate-950">
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-[1] border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-5 text-xs sm:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-10">
          <p className="shrink-0 text-slate-400">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f3c544]/20 text-[10px] font-black text-[#f3c544]">
              i
            </span>
            All prices are per plate; a pair is two plates (front and rear) at
            the price shown.
          </p>
          <span className="hidden h-5 w-px bg-white/10 lg:block" />
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 font-semibold text-slate-400">
              Also made to order:
            </span>
            {alsoMadeFor.map(([item, href]) => (
              <Link
                key={item}
                href={href}
                className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-slate-300 transition hover:border-[#f3c544]/40 hover:bg-white/[.1] hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
