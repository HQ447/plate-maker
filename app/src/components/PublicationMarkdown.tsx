import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

type PublicationMarkdownProps = {
  file: "E08-terms-and-conditions.md" | "E09-privacy-policy.md";
  tone?: "light" | "warm";
};

function publicationCopy(file: PublicationMarkdownProps["file"]) {
  const source = readFileSync(
    path.join(process.cwd(), "..", "assets", "03_essential-pages", file),
    "utf8",
  );
  const marker = "<!-- PUBLICATION COPY STARTS BELOW THIS LINE -->";
  return source.slice(source.indexOf(marker) + marker.length).trim();
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Inline({ children }: { children: string }) {
  const pieces = children.split(/(\[[^\]]+\]\([^\)]+\)|\*\*[^*]+\*\*)/g);
  return pieces.map((piece, index) => {
    const link = piece.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const className = "font-bold text-[#9a7410] underline decoration-[#f3c544]/60 underline-offset-4 transition hover:text-slate-950";
      return href.startsWith("/") ? <Link key={index} href={href} className={className}>{label}</Link> : <a key={index} href={href} className={className} target="_blank" rel="noreferrer">{label}</a>;
    }
    if (piece.startsWith("**") && piece.endsWith("**")) return <strong key={index} className="font-bold text-slate-950">{piece.slice(2, -2)}</strong>;
    return piece;
  });
}

function Table({ rows }: { rows: string[][] }) {
  const [headers, ...body] = rows;
  return <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white/70"><table className="w-full min-w-[540px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{headers.map((cell) => <th key={cell} className="px-4 py-3 font-bold"><Inline>{cell}</Inline></th>)}</tr></thead><tbody>{body.map((row, index) => <tr key={index} className="border-t border-slate-200 even:bg-slate-50/80">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-slate-600"><Inline>{cell}</Inline></td>)}</tr>)}</tbody></table></div>;
}

function parseTable(line: string) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

export default function PublicationMarkdown({ file, tone = "light" }: PublicationMarkdownProps) {
  const lines = publicationCopy(file).split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let index = lines[0]?.startsWith("# ") ? 1 : 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line || line === "---") { index += 1; continue; }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      rows.push(parseTable(lines[index]));
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) { rows.push(parseTable(lines[index])); index += 1; }
      blocks.push(<Table key={`table-${index}`} rows={rows} />);
      continue;
    }

    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      const [, marks, text] = heading;
      const level = marks.length;
      const id = slug(text.replace(/\*\*/g, ""));
      blocks.push(level === 2 ? <h2 key={id} id={id} className="scroll-mt-24 mt-10 border-t border-slate-200 pt-8 text-[clamp(1.55rem,3vw,2.2rem)] font-black tracking-[-.045em] text-slate-950 first:mt-0 first:border-0 first:pt-0"><Inline>{text}</Inline></h2> : <h3 key={id} id={id} className="scroll-mt-24 mt-7 text-lg font-black tracking-[-.025em] text-slate-900"><Inline>{text}</Inline></h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) { items.push(lines[index].trim().slice(2)); index += 1; }
      blocks.push(<ul key={`list-${index}`} className="my-4 space-y-2 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f3c544]" /><span><Inline>{item}</Inline></span></li>)}</ul>);
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !lines[index].trim().startsWith("#") && !lines[index].trim().startsWith("|") && !lines[index].trim().startsWith("- ")) { paragraph.push(lines[index].trim()); index += 1; }
    blocks.push(<p key={`paragraph-${index}`} className="mt-3 text-sm leading-7 text-slate-600"><Inline>{paragraph.join(" ")}</Inline></p>);
  }

  return <article className={tone === "warm" ? "rounded-[1.75rem] border border-amber-100 bg-[#fffdf7] p-5 shadow-[0_20px_55px_rgba(120,88,16,.08)] sm:p-8" : "rounded-[1.75rem] border border-white/90 bg-white/80 p-5 shadow-[0_20px_55px_rgba(15,23,42,.08)] sm:p-8"}>{blocks}</article>;
}
