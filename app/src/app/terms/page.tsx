import type { Metadata } from "next";
import { Scale, ShieldCheck } from "lucide-react";
import EssentialPageShell, { PageLink } from "@/components/EssentialPageShell";
import PublicationMarkdown from "@/components/PublicationMarkdown";

export const metadata: Metadata = { title: "Terms and Conditions | ReplacementPlates", description: "Terms of sale for ReplacementPlates: orders, document checks, delivery charges, cancellation, warranty, faulty goods and your legal rights." };

const sections = [
  ["Definitions", "definitions-and-interpretation"], ["Documents", "legal-obligations-and-documentation-requirements"], ["Show plates", "show-plates-and-off-road-use"], ["Orders", "order-processing-and-personalised-products"], ["Warranty", "quality-control-and-warranty"], ["Delivery & refunds", "delivery-returns-and-refunds"], ["Legal use", "legal-compliance-and-customer-responsibilities"], ["Liability", "liability"], ["General", "general-provisions"],
] as const;

export default function TermsPage() {
  return <EssentialPageShell eyebrow="Terms of sale" title="Terms and Conditions" intro="The terms that apply when you buy from ReplacementPlates, including document checks, delivery, cancellations, warranty and your consumer rights." image="/images/styles/standard.jpg">
    <section className="relative overflow-hidden rounded-[1.75rem] bg-[#080c14] p-5 text-white shadow-xl sm:p-7"><div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[#f3c544]/15 blur-3xl" /><div className="relative grid gap-5 md:grid-cols-[auto_1fr]"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3c544] text-slate-950"><Scale className="h-5 w-5" /></span><div><p className="text-[10px] font-black uppercase tracking-[.17em] text-[#f3c544]">Private Number Plate Maker Ltd</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Read the terms that apply to your order.</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">ReplacementPlates is a trading name of Private Number Plate Maker Ltd, company number 16163051. These terms do not affect your legal rights as a consumer.</p></div></div></section>
    <div className="mt-4 grid gap-4 lg:grid-cols-[230px_minmax(0,1fr)]"><aside className="rounded-[1.5rem] border border-white/90 bg-white/75 p-5 shadow-sm lg:sticky lg:top-24 lg:self-start"><p className="text-[10px] font-black uppercase tracking-[.16em] text-[#c89612]">On this page</p><nav className="mt-3 space-y-1">{sections.map(([label, id]) => <a key={id} href={`#${id}`} className="block rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-[#f3c544]/10 hover:text-slate-950">{label}</a>)}</nav><div className="mt-5 border-t border-slate-200 pt-4"><p className="text-xs leading-5 text-slate-500">Last updated: 28 September 2026</p></div></aside><PublicationMarkdown file="E08-terms-and-conditions.md" /></div>
    <section className="mt-4 flex flex-col gap-4 rounded-[1.75rem] border border-[#f3c544]/30 bg-[#f3c544]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"><div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#9a7410]" /><div><h2 className="text-lg font-black">Need to ask about your order?</h2><p className="mt-1 text-sm leading-6 text-slate-700">For cancellations, amendments, faults, or a complaint, contact us as soon as possible.</p></div></div><div className="flex flex-wrap gap-2"><PageLink href="/contact">Contact us</PageLink><PageLink href="/privacy" light>Privacy policy</PageLink></div></section>
  </EssentialPageShell>;
}
