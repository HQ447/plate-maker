import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-[#080c14] text-white"
    >
      <Image
        src="/images/styles/5d.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover object-center opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(243,197,68,.17),transparent_36%),linear-gradient(90deg,rgba(8,12,20,.96),rgba(8,12,20,.82))]" />
      <div className="homepage-section-content mx-auto h-auto max-w-[1080px] px-5 py-3 sm:px-8 sm:py-5">
        <div className="glass-card glass-card-dark relative h-auto min-h-0 overflow-hidden rounded-[1.6rem] border border-white/10 px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,.3),0_14px_36px_rgba(243,197,68,.07)] sm:px-8 sm:py-6">
          <div className="pointer-events-none !absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f3c544]/10 blur-3xl" />
          <div className="relative grid h-auto min-h-0 items-start gap-5 text-center lg:grid-cols-[1fr_340px] lg:gap-10 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f3c544]/30 bg-[#f3c544]/10 text-[#f3c544]">
                <CarFront className="h-4 w-4" />
              </span>
              <h2
                id="final-cta-heading"
                className="mt-3 max-w-[620px] text-[clamp(2rem,4vw,3rem)] font-black leading-[.98] tracking-[-.06em]"
              >
                Order your number plates{" "}
                <span className="text-gradient-yellow">today.</span>
              </h2>
              <p className="mt-3 max-w-[580px] text-[14px] leading-6 text-slate-300 sm:text-[15px]">
                Single plate or matching pair, made to order and ready for Royal
                Mail delivery or Ilford collection.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="final-registration-input" className="sr-only">
                Enter your registration
              </label>
              <input
                id="final-registration-input"
                type="text"
                maxLength={8}
                placeholder="Enter your registration"
                className="w-full rounded-xl border border-white/20 bg-white/[.1] px-4 py-3 text-center text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-slate-400 focus:border-[#f3c544] focus:ring-2 focus:ring-[#f3c544]/25 lg:text-left"
              />
              <Link
                href="#configurator"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3c544] px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-[#f7d465]"
              >
                Build my plates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
