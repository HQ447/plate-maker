import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/sections/HomePage/SiteFooter";

type EssentialPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children: React.ReactNode;
};

export default function EssentialPageShell({ eyebrow, title, intro, image = "/images/hero-car-bg.jpg", children }: EssentialPageShellProps) {
  return (
    <main className="min-h-screen bg-[#eef3f8] text-slate-950">
      <Navbar />
      <section className="relative isolate overflow-hidden bg-[#070c16] pt-24 text-white sm:pt-28">
        <Image src={image} alt="" fill priority className="object-cover object-center opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070c16_8%,rgba(7,12,22,.84)_48%,rgba(7,12,22,.38)_100%)]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="max-w-[760px]">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#f3c544]"><span className="h-px w-6 bg-[#f3c544]" />{eyebrow}</div>
            <h1 className="text-[clamp(2.35rem,5vw,4.8rem)] font-black leading-[.96] tracking-[-.06em]">{title}</h1>
            <p className="mt-5 max-w-[660px] text-sm leading-7 text-slate-200 sm:text-base">{intro}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-full bg-[#eef3f8] [clip-path:polygon(0_100%,27%_0,50%_70%,73%_0,100%_100%)]" />
      </section>
      <div className="mx-auto max-w-[1120px] px-5 pb-16 pt-6 sm:px-8 lg:px-10 lg:pb-20">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function PageLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition ${light ? "border border-slate-300 bg-white/60 text-slate-700 hover:border-slate-500" : "bg-slate-950 text-white hover:bg-slate-800"}`}>{children}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></Link>;
}

export function InlinePageLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="font-bold text-[#9a7410] underline decoration-[#f3c544]/60 underline-offset-4 transition hover:text-slate-950">{children}</Link>;
}

export function ExternalStyleLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-1 text-xs font-bold text-[#9a7410] transition hover:text-slate-950">{children}<ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>;
}
