import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BadgeCheck, CheckCircle2, MapPin, PackageCheck, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import EssentialPageShell, { ExternalStyleLink, InlinePageLink, PageLink } from "@/components/EssentialPageShell";

export const metadata: Metadata = {
  title: "About ReplacementPlates | ReplacementPlates",
  description: "ReplacementPlates is a trading name of Private Number Plate Maker Ltd, a DVLA-registered number plate supplier.",
};

const styles = [
  ["Standard", "/standard-number-plates"],
  ["3D gel", "/3d-number-plates"],
  ["4D", "/4d-number-plates"],
  ["5D", "/5d-number-plates"],
  ["Ghost", "/ghost-number-plates"],
  ["Bevel", "/bevel-number-plates"],
] as const;

const workingMethods: { icon: LucideIcon; title: string; text: ReactNode }[] = [
  { icon: ShieldCheck, title: "Documents first", text: <>The law requires a registered supplier to check your identity and your right to use the registration. See <InlinePageLink href="/documents-you-need">documents you need</InlinePageLink>.</> },
  { icon: CheckCircle2, title: "Marked plates", text: "Road-use plates carry the supplier’s name and postcode and the British Standard number." },
  { icon: PackageCheck, title: "Cancel before production", text: <>You can cancel for a full refund at any time before production starts, with no fee. See <InlinePageLink href="/returns">returns and cancellations</InlinePageLink>.</> },
  { icon: BadgeCheck, title: "Warranty", text: <>New orders carry a manufacturing-defect warranty in addition to your statutory rights. See <InlinePageLink href="/warranty">warranty</InlinePageLink>.</> },
];

export default function AboutPage() {
  return (
    <EssentialPageShell eyebrow="The company behind the plates" title="About ReplacementPlates" intro="ReplacementPlates makes number plates to order for drivers who need a replacement: a cracked, faded, lost or stolen plate, a single plate to go with one you’re keeping, or a change of finish." image="/images/styles/standard.jpg">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <article className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_16px_40px_rgba(15,23,42,.07)] sm:p-7">
          <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-[#f3c544]"><BadgeCheck className="h-5 w-5" /></span><div><p className="text-[10px] font-black uppercase tracking-[.17em] text-[#c89612]">Who we are</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Registered, transparent, and made to order.</h2></div></div>
          <p className="mt-5 text-sm leading-6 text-slate-600">ReplacementPlates is a trading name of <strong className="text-slate-950">Private Number Plate Maker Ltd</strong>, a company registered in England and Wales under company number 16163051. We are a DVLA-registered number plate supplier, supplier ID RNPS 75449. The company has sold <strong className="text-slate-950">12,000+ plates since January 2025</strong>.</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">The RNPS number identifies us as a registered supplier. It does not mean the DVLA has approved any particular plate design; each plate still has to meet the legal requirements.</p>
          <div className="mt-6 border-t border-slate-200 pt-5"><h3 className="text-lg font-black tracking-[-.03em]">What we make</h3><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{styles.map(([label, href]) => <ExternalStyleLink key={href} href={href}>{label}</ExternalStyleLink>)}</div><p className="mt-3 text-sm leading-6 text-slate-600">We also make motorcycle and oversized formats. Prices are per plate, and you can order a single front or rear plate or a pair. See the <InlinePageLink href="/prices">price list</InlinePageLink>.</p></div>
        </article>
        <aside className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"><div className="glass-card glass-card-light rounded-2xl border border-white/90 p-4 shadow-sm"><BadgeCheck className="h-5 w-5 text-[#c89612]" /><p className="mt-4 text-2xl font-black tracking-[-.06em]">RNPS 75449</p><p className="mt-1 text-xs text-slate-500">DVLA-registered supplier</p></div><div className="glass-card glass-card-light rounded-2xl border border-white/90 p-4 shadow-sm"><PackageCheck className="h-5 w-5 text-[#c89612]" /><p className="mt-4 text-2xl font-black tracking-[-.06em]">12,000+</p><p className="mt-1 text-xs text-slate-500">plates sold since Jan 2025</p></div><div className="glass-card glass-card-light rounded-2xl border border-white/90 p-4 shadow-sm"><MapPin className="h-5 w-5 text-[#c89612]" /><p className="mt-4 text-2xl font-black tracking-[-.06em]">Ilford</p><p className="mt-1 text-xs text-slate-500">one collection point</p></div></aside>
      </div>

      <section className="mt-4 rounded-3xl bg-[#0b1625] p-5 text-white shadow-xl sm:p-7"><p className="text-[10px] font-black uppercase tracking-[.17em] text-[#f3c544]">How we work</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em]">The important checks happen before production.</h2><div className="mt-5 grid gap-2.5 sm:grid-cols-2">{workingMethods.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.05] p-4"><Icon className="h-4 w-4 text-[#f3c544]" /><h3 className="mt-3 text-sm font-extrabold">{title}</h3><p className="mt-1.5 text-[13px] leading-5 text-slate-400">{text}</p></div>)}</div></section>

      <section className="mt-4 rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm sm:p-7"><p className="text-[10px] font-black uppercase tracking-[.17em] text-[#c89612]">Company details</p><div className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">{[["Trading name", "ReplacementPlates"], ["Legal entity", "Private Number Plate Maker Ltd"], ["Company number", "16163051 (England and Wales)"], ["Registered office", "Stand 53, New Spitalfields Market, 1 Sherrin Road, London, E10 5SQ"], ["Supplier ID", "RNPS 75449"], ["Collection", "Castleview Gardens, Ilford, IG1 3QF"]].map(([label, value]) => <div key={label} className="border-b border-slate-200 pb-2"><dt className="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">{label}</dt><dd className="mt-1 font-semibold text-slate-700">{value}</dd></div>)}</div><div className="mt-5 flex flex-wrap gap-2"><PageLink href="/contact">Contact us</PageLink><PageLink href="/terms" light>Terms and conditions</PageLink></div></section>
    </EssentialPageShell>
  );
}
