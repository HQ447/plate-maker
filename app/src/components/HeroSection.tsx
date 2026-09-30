"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  Layers3,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";

type PlateType = "front" | "rear" | "pair";

const plateStyles = [
  { value: "standard", label: "Standard (Legal)" },
  { value: "3d-gel", label: "3D Gel" },
  { value: "4d", label: "4D" },
  { value: "5d", label: "5D" },
  { value: "ghost", label: "Ghost" },
  { value: "bevel", label: "Bevel" },
];

const trustBadges = [
  { icon: ShieldCheck, title: "DVLA registered", subtitle: "RNPS 75449" },
  { icon: Truck, title: "Royal Mail delivery", subtitle: "UK-wide" },
  { icon: MapPin, title: "Collection available", subtitle: "in Ilford" },
];

export default function HeroSection() {
  const [registration, setRegistration] = useState("");
  const [plateType, setPlateType] = useState<PlateType>("front");
  const [style, setStyle] = useState("standard");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

  const selectedStyle = plateStyles.find((item) => item.value === style);

  return (
    <section
      aria-label="Hero — Build your replacement plates"
      className="hero relative isolate overflow-hidden bg-[#070c16]"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-car-bg.jpg"
          alt="Luxury Audi R8 with a UK number plate"
          fill
          priority
          quality={92}
          className="object-cover object-[61%_28%] lg:object-[center_42%]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,10,19,.62)_0%,rgba(4,10,19,.30)_42%,rgba(4,10,19,.08)_78%,rgba(4,10,19,.18)_100%)]" />

      <div className="mx-auto grid min-h-[760px] w-full max-w-[1280px] grid-cols-1 items-start gap-8 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-10 lg:pb-16 lg:pt-28">
        <div className="flex max-w-[620px] flex-col items-start pt-1 lg:pt-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/35 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md sm:text-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            DVLA-registered supplier{" "}
            <span className="text-white/60">(RNPS 75449)</span>
          </div>

          <h1 className="max-w-[620px] text-[clamp(2.35rem,5.1vw,4.5rem)] font-black leading-[.9] tracking-[-.055em] text-white">
            Replacement
            <br />
            number plates,
            <br />
            <span className="bg-gradient-to-r from-[#fde9a3] via-[#f3c544] to-[#c89612] bg-clip-text text-transparent">
              made easy
            </span>
          </h1>

          <p className="mt-5 max-w-[470px] text-sm leading-6 text-slate-200/90 sm:text-base sm:leading-7">
            Single plates or matching pairs, made to order. Royal Mail delivery,
            UK-wide or collection in Ilford.
          </p>

          <div className="mt-6 grid w-full max-w-[580px] grid-cols-3 gap-2 border-t border-white/15 pt-4 sm:gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#f3c544]/35 bg-[#f3c544]/20 text-[#f3c544] shadow-lg shadow-amber-950/30 sm:h-9 sm:w-9">
                  <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold leading-tight text-white sm:text-[13px]">
                    {badge.title}
                  </span>
                  <span className="mt-0.5 block text-[9px] text-slate-300/75 sm:mt-1 sm:text-xs">
                    {badge.subtitle}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:mt-44 lg:justify-self-end">
          <div
            id="configurator"
            className="mx-auto w-full max-w-[400px] rounded-[1.5rem] border border-white/20 bg-[#07111f]/72 p-4 shadow-[0_24px_65px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.14)] backdrop-blur-xl sm:p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f3c544]">
                  Start your order
                </p>
                <h2 className="mt-1 text-lg font-bold tracking-[-.02em] text-white">
                  Enter your registration
                </h2>
              </div>
              <button
                id="configurator-region-btn"
                type="button"
                aria-label="Region: United Kingdom"
                className="flex shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/[.07] px-2 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:bg-white/[.12]"
              >
                <span className="text-sm leading-none">🇬🇧</span>UK
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>
            </div>

            <div className="mb-3 rounded-xl border-2 border-white/80 bg-[#f8fafc] shadow-[inset_0_2px_7px_rgba(15,23,42,.12),0_8px_20px_rgba(0,0,0,.13)]">
              <label htmlFor="configurator-reg-input" className="sr-only">
                Enter your vehicle registration
              </label>
              <input
                id="configurator-reg-input"
                type="text"
                value={registration}
                onChange={(event) =>
                  setRegistration(event.target.value.toUpperCase())
                }
                maxLength={8}
                placeholder="ABC12DE"
                className="plate-font w-full bg-transparent px-4 py-1.5 text-center text-[clamp(1.6rem,6vw,2.1rem)] font-black tracking-[.12em] text-black  outline-none placeholder:text-gray-300"
              />
            </div>

            <div
              className="mb-3 grid grid-cols-3 gap-2"
              role="group"
              aria-label="Select plate type"
            >
              {(["front", "rear", "pair"] as PlateType[]).map((type) => {
                const isSelected = plateType === type;
                return (
                  <button
                    key={type}
                    id={`configurator-type-${type}`}
                    type="button"
                    onClick={() => setPlateType(type)}
                    aria-pressed={isSelected}
                    className={`flex min-h-10 items-center justify-center gap-1 rounded-lg border px-2 text-[11px] font-bold capitalize transition sm:text-xs ${isSelected ? "border-[#f3c544]/70 bg-[#f3c544] text-slate-950 shadow-lg shadow-amber-950/50" : "border-white/15 bg-white/[.06] text-slate-300 hover:bg-white/[.11] hover:text-white"}`}
                  >
                    <Car className="h-3.5 w-3.5 shrink-0" />
                    {type}
                  </button>
                );
              })}
            </div>

            <div className="relative mb-3">
              <button
                id="configurator-style-btn"
                type="button"
                onClick={() => setStyleDropdownOpen((open) => !open)}
                aria-expanded={styleDropdownOpen}
                aria-haspopup="listbox"
                className="flex w-full items-center justify-between rounded-lg border border-white/15 bg-white/[.06] px-3.5 py-3 text-left text-xs font-semibold text-white transition hover:bg-white/[.1]"
              >
                <span className="flex items-center gap-2.5">
                  <Layers3 className="h-3.5 w-3.5 text-[#f3c544]" />
                  {selectedStyle?.label}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-slate-400 transition ${styleDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {styleDropdownOpen && (
                <div
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-white/15 bg-[#07111f] p-1.5 shadow-2xl"
                >
                  {plateStyles.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      role="option"
                      aria-selected={style === item.value}
                      onClick={() => {
                        setStyle(item.value);
                        setStyleDropdownOpen(false);
                      }}
                      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${style === item.value ? "bg-[#f3c544]/20 font-bold text-white" : "text-slate-300 hover:bg-white/[.07] hover:text-white"}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/build?reg=${encodeURIComponent(registration)}&type=${plateType}&style=${style}`}
              id="configurator-build-cta"
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f3c544] px-4 text-center text-xs font-bold text-slate-950 shadow-xl shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-[#f7d465] sm:text-sm"
            >
              Build my plates — from £12.49
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
            <p className="mt-2 text-center text-[11px] font-medium text-slate-400">
              £12.49 single <span className="mx-1 text-slate-600">•</span>{" "}
              £24.98 pair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
