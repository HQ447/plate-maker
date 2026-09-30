import type { ReactNode } from "react";

type DividerProps = {
  fill: string;
  shape?: "valley" | "wave" | "swoop" | "steps" | "arch" | "diagonal";
};

export function SectionDivider({ fill, shape = "valley" }: DividerProps) {
  const paths = {
    valley: "M0 0H380L720 52L1060 0H1440V52H0Z",
    wave: "M0 10C230 58 430 58 720 8C1010 -42 1210 2 1440 42V52H0Z",
    swoop: "M0 0H330C510 0 570 52 720 52C870 52 930 0 1110 0H1440V52H0Z",
    steps: "M0 0H300L480 26L720 0L960 26L1140 0H1440V52H0Z",
    arch: "M0 52C230 -18 470 -18 720 38C970 94 1210 48 1440 0V52H0Z",
    diagonal: "M0 0L260 0L720 52L1180 0L1440 0V52H0Z",
  };

  return (
    <div className="section-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 52" preserveAspectRatio="none">
        <path d={paths[shape]} fill={fill} />
      </svg>
    </div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] ${dark ? "text-[#f3c544]" : "text-[#c89612]"}`}>
      {children}
    </div>
  );
}

export const primaryButton = "inline-flex items-center justify-center gap-2 rounded-full bg-[#f3c544] px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-950/25 transition hover:-translate-y-0.5 hover:bg-[#f7d465]";
export const secondaryButton = "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-xs font-bold text-white transition hover:border-[#f3c544]/50 hover:bg-white/[.1]";
