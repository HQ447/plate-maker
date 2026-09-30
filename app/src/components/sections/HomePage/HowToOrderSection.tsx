import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  FileCheck2,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { Eyebrow, SectionDivider } from "./_shared";

const steps = [
  {
    number: "01",
    title: "Enter your registration",
    text: "See a preview as you build your front plate, rear plate or matching pair.",
    icon: CarFront,
  },
  {
    number: "02",
    title: "Choose your style and size",
    text: "Select your finish, size and any available options before you pay.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Provide your documents",
    text: "We check your identity and entitlement to use the registration.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "We make and send them",
    text: "Once checks are complete, we make your plates for Royal Mail or Ilford collection.",
    icon: PackageCheck,
  },
];

export default function HowToOrderSection() {
  return (
    <section
      id="how-to-order"
      aria-labelledby="how-to-order-heading"
      className="relative isolate overflow-hidden bg-[#080c14] text-white"
    >
      <Image
        src="/images/reasons/trailer.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover object-center opacity-[.055]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#080c14_10%,rgba(8,12,20,.92)_60%,#080c14_100%)]" />
      <SectionDivider fill="#080c14" shape="swoop" />
      <div className="homepage-section-content mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <Eyebrow dark>How to order online</Eyebrow>
            <h2
              id="how-to-order-heading"
              className="max-w-[590px] text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.02] tracking-[-.055em]"
            >
              Simple from start to{" "}
              <span className="text-gradient-blue">finish.</span>
            </h2>
            <p className="mt-4 max-w-[510px] text-sm leading-6 text-slate-300">
              Your plates are made to the details you enter, so we keep the
              process clear: build, verify, make, then deliver or collect.
            </p>
            <Link
              href="#configurator"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f3c544] px-4 py-2.5 text-xs font-black text-slate-950 transition hover:bg-[#f7d465]"
            >
              Start building <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <div
                key={number}
                className="glass-card glass-card-dark min-h-[174px] rounded-[1.35rem] border border-white/10 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xl font-black tracking-[-.05em] text-[#f3c544]/55">
                    {number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.07] text-[#f3c544]">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-7 text-[16px] lg:text-[19px] font-extrabold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="glass-card glass-card-dark rounded-3xl border border-[#f3c544]/20 bg-[#f3c544]/[.06] p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3c544] text-slate-950">
                <FileCheck2 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[.17em] text-[#f3c544]">
                  Documents you’ll need
                </p>
                <h3 className="mt-1.5 text-lg font-black tracking-[-.03em]">
                  Have your documents ready
                </h3>
                <p className="mt-1.5 max-w-2xl text-[13px] leading-5 text-slate-300">
                  Every registered supplier must see proof of your name and
                  address, plus proof that you can use the registration. A
                  driving licence, recent utility bill or bank statement can
                  help with the first part; your V5C or entitlement certificate
                  can help with the second.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/documents-you-need"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-xs font-bold text-white transition hover:border-[#f3c544]/50 hover:bg-white/[.12]"
          >
            Full documents list <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
