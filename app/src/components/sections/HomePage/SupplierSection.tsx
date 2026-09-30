import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, PackageCheck } from "lucide-react";
import { Eyebrow, SectionDivider } from "./_shared";

const proofPoints = [
  { icon: BadgeCheck, value: "75449", label: "DVLA supplier number" },
  { icon: PackageCheck, value: "12,000+", label: "plates sold since Jan 2025" },
  { icon: MapPin, value: "Ilford", label: "one collection point" },
];

export default function SupplierSection() {
  return (
    <section aria-labelledby="supplier-heading" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] text-slate-950">
      <SectionDivider fill="#f8fafc" shape="arch" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-14">
          <div><Eyebrow>A supplier you can trust</Eyebrow><h2 id="supplier-heading" className="max-w-[570px] text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em]">Good plates start with <span className="text-gradient-yellow-on-light">good checks.</span></h2><p className="mt-5 max-w-[560px] text-[15px] leading-6 text-slate-500">Private Number Plate Maker Ltd is registered with the DVLA as a number plate supplier. ReplacementPlates is the trading name customers see when ordering online.</p><Link href="/about" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">Meet ReplacementPlates <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></Link></div>
          <div className="relative overflow-hidden rounded-[1.7rem] bg-slate-950 p-4 text-white shadow-[0_22px_48px_rgba(15,23,42,.2),0_14px_34px_rgba(243,197,68,.07)] sm:p-5"><Image src="/images/styles/standard.jpg" alt="Standard replacement plate detail" fill className="object-cover object-center opacity-25" sizes="(max-width: 1024px) 100vw, 55vw" /><div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,.96),rgba(15,23,42,.8),rgba(2,6,23,.65))]" /><div className="relative grid gap-3 sm:grid-cols-3">{proofPoints.map(({ icon: Icon, value, label }) => <div key={label} className="glass-card glass-card-dark flex min-h-[178px] flex-col items-center rounded-2xl border border-white/10 p-5 text-center sm:items-start sm:text-left"><Icon className="h-7 w-7 text-[#f3c544] sm:h-5 sm:w-5" /><p className="mt-6 text-2xl font-black tracking-[-.06em] sm:mt-9">{value}</p><p className="mt-2 text-[11px] font-bold uppercase tracking-[.1em] text-slate-400">{label}</p></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}
