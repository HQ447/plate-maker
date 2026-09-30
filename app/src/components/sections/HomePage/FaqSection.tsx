import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Eyebrow, SectionDivider } from "./_shared";

const faqs = [
  ["How quickly can I get replacement number plates?", "For delivery, order before 2pm on a working weekday and, once your documents are checked, we aim to dispatch by Royal Mail the same day. For collection, plates can be ready within 3 hours; contact us via WhatsApp to confirm before travelling."],
  ["Where do I collect from?", "Our Ilford collection point is in Castleview Gardens, IG1 3QF. Plates can be ready within 3 hours, subject to WhatsApp confirmation. Please confirm before travelling."],
  ["Do you have shops in other towns?", "No. We have one collection point in Ilford. Elsewhere, we deliver by Royal Mail; see our delivery page for areas."],
  ["Do I need documents?", "Yes. UK law requires proof of your name and address, and proof that you are entitled to use the registration."],
  ["Can I replace just one plate?", "Yes. Order a single front or rear plate and tell us the size and style of the plate you are keeping."],
  ["My plates were stolen. What should I do?", "Report it to the police and keep the reference number, then order replacements. If you later get fines for journeys you did not make, your registration may have been cloned — tell the police and whoever issued the fine."],
  ["Can I change style when I replace my plates?", "Yes. You can choose Standard, 3D, 4D, 5D, Ghost or Bevel. The registration, typeface, spacing and markings stay the same; only the finish changes."],
  ["Are the prices per plate or per pair?", "Prices are per plate. A pair means two plates — front and rear — at the pair price shown on each product page."],
  ["What if my plate has a manufacturing fault?", "Contact us and we will assess it."],
] as const;

export default function FaqSection() {
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="relative isolate overflow-hidden bg-[#080c14] text-white">
      <Image src="/images/styles/ghost.jpg" alt="" fill className="pointer-events-none object-cover object-center opacity-[.045]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,12,20,.97),rgba(8,12,20,.88),rgba(8,12,20,.96))]" />
      <SectionDivider fill="#080c14" shape="diagonal" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14"><div><Eyebrow dark>Frequently asked</Eyebrow><h2 id="faqs-heading" className="max-w-[520px] text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em]">Questions, answered <span className="text-gradient-yellow">clearly.</span></h2><p className="mt-5 max-w-[450px] text-[15px] leading-6 text-slate-300">From delivery and documents to styles and faults, here are the answers customers ask us most.</p><Link href="/faqs" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f3c544] px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-[#f7d465]">View all FAQs <ArrowRight className="h-3.5 w-3.5" /></Link></div><div className="space-y-2">{faqs.map(([question, answer], index) => <details key={question} className="group glass-card glass-card-dark rounded-[1.15rem] border border-white/10 transition hover:border-white/20"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14px] font-bold text-white [&::-webkit-details-marker]:hidden"><span><span className="mr-3 text-[10px] font-black tracking-[.16em] text-[#f3c544]/70">{String(index + 1).padStart(2, "0")}</span>{question}</span><ChevronDown className="h-4 w-4 shrink-0 text-[#f3c544] transition group-open:rotate-180" /></summary><p className="border-t border-white/10 px-5 pb-5 pt-4 text-[14px] leading-5 text-slate-300">{answer}</p></details>)}</div></div>
      </div>
    </section>
  );
}
