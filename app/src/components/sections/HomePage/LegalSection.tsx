import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpenText, Check, Gavel, ShieldCheck } from "lucide-react";
import { Eyebrow, SectionDivider } from "./_shared";

const requirements = ["Charles Wright characters", "Correct spacing", "White front / yellow rear", "Supplier markings"];

export default function LegalSection() {
  return (
    <section id="legal-requirements" aria-labelledby="legal-heading" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#e9eff5_100%)] text-slate-950">
      <SectionDivider fill="#f8fafc" shape="steps" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>Built for the road</Eyebrow>
            <h2 id="legal-heading" className="max-w-[650px] text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em]">Made to the legal <span className="text-gradient-yellow-on-light">requirements.</span></h2>
            <p className="mt-5 max-w-[620px] text-[15px] leading-6 text-slate-500">Correct characters, spacing, reflective backgrounds, black non-reflective characters, supplier identification and the British Standard marking are all part of a road-use plate.</p>
            <div className="mt-5 flex flex-wrap gap-2">{requirements.map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/65 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm"><Check className="h-3 w-3 text-[#c89612]" />{item}</span>)}</div>
            <p className="mt-5 max-w-[620px] border-l-2 border-[#f3c544] pl-4 text-[12px] leading-5 text-slate-500">Standard, 3D, 4D, 5D and Bevel are made to these requirements. Ghost construction and compliance information is being finalised; see the Ghost product page for its current status before ordering.</p>
            <div className="mt-6 flex flex-wrap gap-2.5"><Link href="/legal-number-plates" className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">Read the legal guide <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></Link><Link href="/terms" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-white">Terms & conditions <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.7rem] bg-slate-950 p-6 text-white shadow-[0_24px_52px_rgba(15,23,42,.2)] sm:p-7">
            <Image src="/images/styles/standard.jpg" alt="Standard replacement number plate" fill className="object-cover opacity-20" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-950/45" />
            <div className="relative"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3c544] text-slate-950"><Gavel className="h-4 w-4" /></span><span className="text-[9px] font-black uppercase tracking-[.18em] text-slate-500">Compliance first</span></div><h3 className="mt-10 max-w-sm text-2xl font-black tracking-[-.04em]">Legal display and MOT checks are related — but not the same.</h3><p className="mt-3 max-w-sm text-[13px] leading-5 text-slate-300">A correctly made plate can still fail an MOT if it is damaged, dirty, insecurely fitted or obscured.</p><div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-[11px] font-semibold text-slate-300"><div className="flex items-center gap-2.5"><BadgeCheck className="h-3.5 w-3.5 text-[#f3c544]" /> Registered supplier: RNPS 75449</div><div className="flex items-center gap-2.5"><ShieldCheck className="h-3.5 w-3.5 text-[#f3c544]" /> Road-use checks before production</div><div className="flex items-center gap-2.5"><BookOpenText className="h-3.5 w-3.5 text-[#f3c544]" /> Current rules explained clearly</div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
