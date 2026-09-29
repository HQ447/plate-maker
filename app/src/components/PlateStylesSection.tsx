"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const plateStyles = [
  { id: "style-standard", name: "Standard (Legal)", description: "Flat printed characters", priceFrom: "£12.49", pairPrice: "£24.98", href: "/standard-number-plates", image: "/images/styles/standard.jpg", imageAlt: "Standard UK number plate AB12" },
  { id: "style-3d", name: "3D gel", description: "Raised, domed resin characters", priceFrom: "£19.95", pairPrice: "£39.90", href: "/3d-number-plates", image: "/images/styles/3d-gel.jpg", imageAlt: "3D gel UK number plate AB12" },
  { id: "style-4d", name: "4D", description: "Laser-cut acrylic characters", priceFrom: "£19.95", pairPrice: "£39.90", href: "/4d-number-plates", image: "/images/styles/4d.jpg", imageAlt: "4D laser-cut UK number plate AB12" },
  { id: "style-5d", name: "5D", description: "Acrylic characters with a gel layer", priceFrom: "£34.95", pairPrice: "£69.90", href: "/5d-number-plates", image: "/images/styles/5d.jpg", imageAlt: "5D premium UK number plate AB12 yellow", badge: "Popular" },
  { id: "style-ghost", name: "Ghost", description: "A distinctive styled character finish", priceFrom: "£34.95", pairPrice: "£69.90", href: "/ghost-number-plates", image: "/images/styles/ghost.jpg", imageAlt: "Ghost carbon-look UK number plate AB12" },
  { id: "style-bevel", name: "Bevel", description: "Angled, diamond-cut character edges", priceFrom: "£39.95", pairPrice: "£79.90", href: "/bevel-number-plates", image: "/images/styles/bevel.jpg", imageAlt: "Bevel diamond-cut UK number plate AB12", badge: "Premium" },
];

const alsoMadeFor = ["Motorcycle", "Short", "Hex", "Japanese import", "Oversized"];

export default function PlateStylesSection() {
  return (
    <section aria-labelledby="plate-styles-heading" className="plate-styles relative isolate bg-[#08111e] text-white">
      <div className="section-divider section-divider-dark" aria-hidden="true"><svg viewBox="0 0 1440 52" preserveAspectRatio="none"><path d="M0 0H380L720 52L1060 0H1440V52H0Z" fill="#08111e" /></svg></div>
      <div className="mx-auto max-w-[1280px] px-5 pb-5 pt-7 sm:px-8 lg:px-10 lg:pb-6 ">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center text-[11px] font-bold uppercase tracking-[.18em] text-[#f3c544]">Plate styles</div>
            <h2 id="plate-styles-heading" className="max-w-[720px] text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.04] tracking-[-.05em]">Choose your style, <span className="bg-gradient-to-r from-[#fde9a3] to-[#c89612] bg-clip-text text-transparent">priced per plate.</span></h2>
          </div>
          <Link id="styles-view-all-btn" href="/plate-styles" className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/[.06] px-5 py-3 text-sm font-bold text-white transition hover:border-[#f3c544]/50 hover:bg-white/[.12] sm:self-auto">View all styles <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {plateStyles.map((style) => (
            <Link key={style.id} id={style.id} href={style.href} aria-label={`${style.name} plates from ${style.priceFrom}`} className="glass-card glass-card-dark group relative flex min-h-[235px] flex-col overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f3c544]/50 hover:shadow-amber-950/40">
              {style.badge && <span className={`absolute right-2.5 top-2.5 z-10 rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ${style.badge === "Popular" ? "bg-[#f3c544] text-slate-950" : "bg-violet-500 text-white"}`}>{style.badge}</span>}
              <div className="relative h-28 shrink-0 overflow-hidden bg-slate-900 sm:h-32"><Image src={style.image} alt={style.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#08111e] via-transparent to-transparent" /></div>
              <div className="flex flex-1 flex-col p-3 sm:p-4"><h3 className="text-sm font-extrabold leading-tight tracking-[-.02em] text-white">{style.name}</h3><p className="mt-1.5 text-[11px] leading-4 text-slate-400">{style.description}</p><div className="mt-auto pt-3"><p className="text-sm font-extrabold text-white">From {style.priceFrom}</p><p className="mt-0.5 text-[11px] text-slate-500">Pair {style.pairPrice}</p></div></div>
              <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[.06] text-slate-400 transition group-hover:border-[#f3c544] group-hover:bg-[#f3c544] group-hover:text-slate-950"><ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10"><div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-5 text-xs sm:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-10"><p className="shrink-0 text-slate-400"><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f3c544]/20 text-[10px] font-black text-[#f3c544]">i</span>All prices are per plate; a pair is two plates.</p><span className="hidden h-5 w-px bg-white/10 lg:block" /><div className="flex flex-wrap items-center gap-1.5"><span className="mr-1 font-semibold text-slate-400">Also made to order:</span>{alsoMadeFor.map((item) => <Link key={item} href={`/${item.toLowerCase().replaceAll(" ", "-")}-number-plates`} className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-slate-300 transition hover:border-[#f3c544]/40 hover:bg-white/[.1] hover:text-white">{item}</Link>)}<Link href="/all-number-plates" aria-label="View all plate types" className="ml-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#f3c544] hover:bg-[#f3c544] hover:text-slate-950"><ArrowRight className="h-3 w-3" /></Link></div></div></div>
    </section>
  );
}
