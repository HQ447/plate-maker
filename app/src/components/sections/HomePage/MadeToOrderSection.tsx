import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, PackageCheck, UserRoundCheck } from "lucide-react";
import { Eyebrow, primaryButton } from "./_shared";

const highlights = [
  { icon: UserRoundCheck, title: "Enter your registration", text: "Choose a single front, rear or matching pair." },
  { icon: Boxes, title: "Choose your finish", text: "Compare Standard, 3D, 4D, 5D, Ghost and Bevel." },
  { icon: PackageCheck, title: "Made for your order", text: "We check your documents before making road-use plates." },
];

export default function MadeToOrderSection() {
  return (
    <section aria-labelledby="made-to-order-heading" className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] text-slate-950">
      <Image src="/images/hero-car-bg.jpg" alt="" fill className="pointer-events-none object-cover object-[72%_46%] opacity-[.035]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,250,252,.98)_15%,rgba(248,250,252,.92)_55%,rgba(238,243,248,.98)_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#f3c544]/10 blur-3xl" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>Made to order</Eyebrow>
            <h2 id="made-to-order-heading" className="max-w-[600px] text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.02] tracking-[-.055em]">Replacement number plates, <span className="text-gradient-yellow">made to order.</span></h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-slate-600">Need a new number plate? ReplacementPlates is a trading name of Private Number Plate Maker Ltd, a DVLA-registered number plate supplier. Enter your registration, choose a single front or rear plate or a matching pair, pick your style and order online.</p>
            <p className="mt-3 max-w-[540px] text-[14px] leading-6 text-slate-500">Every plate is produced to the legal requirements for registration plates and can be sent by Royal Mail or collected from our Ilford collection point.</p>
            <div className="mt-5 flex flex-wrap gap-2.5"><Link href="/how-it-works" className={primaryButton}>See how it works <ArrowRight className="h-3.5 w-3.5" /></Link><Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/60 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-500 hover:bg-white">About us <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">{highlights.map(({ icon: Icon, title, text }, index) => <div key={title} className="glass-card glass-card-light flex flex-col items-center rounded-[1.4rem] border border-white/90 p-5 text-center sm:min-h-[210px] sm:items-start sm:text-left"><div className="relative flex w-full items-center justify-center sm:justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c89612]/30 bg-[#f3c544]/15 text-[#a77d08] sm:h-10 sm:w-10"><Icon className="h-6 w-6 sm:h-4 sm:w-4" /></div><span className="absolute right-0 text-[13px] font-black tracking-[.18em] text-[#c89612]/70 sm:static sm:text-[10px]">0{index + 1}</span></div><h3 className="mt-5 text-[15px] font-extrabold text-slate-950 sm:mt-9">{title}</h3><p className="mt-2 text-[13px] leading-5 text-slate-500">{text}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
