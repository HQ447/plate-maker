"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  {
    label: "Plate Styles",
    href: "/plate-styles",
    dropdown: [
      { label: "Standard (Legal)", href: "/standard-number-plates" },
      { label: "3D Gel", href: "/3d-number-plates" },
      { label: "4D", href: "/4d-number-plates" },
      { label: "5D", href: "/5d-number-plates" },
      { label: "Ghost", href: "/ghost-number-plates" },
      { label: "Bevel", href: "/bevel-number-plates" },
    ],
  },
  { label: "Delivery & Collection", href: "/delivery" },
  {
    label: "Help",
    href: "/help",
    dropdown: [
      { label: "FAQs", href: "/faqs" },
      { label: "Documents Needed", href: "/documents-you-need" },
      { label: "All Guides", href: "/guides" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const cartCount = 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080C14]/95 backdrop-blur-2xl border-b border-white/8 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="ReplacementPlates.uk — Home"
            >
              {/* Logo Mark */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#fde9a3] to-[#c89612] flex items-center justify-center shadow-lg group-hover:shadow-amber-500/40 transition-all duration-300 flex-shrink-0">
                <span className="text-white font-black text-sm leading-none select-none">
                  RP
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[15px] leading-tight tracking-tight">
                  ReplacementPlates
                  <span className="text-[#f3c544]">.uk</span>
                </span>
                <span className="text-[9px] text-slate-400 font-medium tracking-widest uppercase leading-tight">
                  DVLA REGISTERED RNPS 75449
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {(() => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                      <>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {link.label}
                          {link.dropdown && (
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                activeDropdown === link.label ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </Link>
                        {isActive && (
                          <div className="absolute bottom-0 left-3 right-3 h-px bg-[#f3c544] rounded-full" />
                        )}
                      </>
                    );
                  })()}

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-52 glass-dark rounded-2xl shadow-2xl py-1.5 overflow-hidden z-50 animate-fade-in-up border border-white/10">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                id="navbar-search-btn"
                aria-label="Search"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                id="navbar-cart-btn"
                aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
                className="relative hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#f3c544] rounded-full text-[10px] font-bold text-slate-950 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Primary CTA */}
              <Link
                href="/#configurator"
                id="navbar-build-cta"
                className="hidden sm:flex items-center gap-2 bg-[#f3c544] hover:bg-[#f7d465] text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Build my plates
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger */}
              <button
                id="navbar-mobile-menu-btn"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex w-9 h-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 glass-dark border-b border-white/10 transition-all duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="p-4 flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                  <div key={link.label}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                      ? "text-white bg-white/8"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                  </div>
                    );
                  })}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/#configurator"
                className="flex items-center justify-center gap-2 bg-[#f3c544] hover:bg-[#f7d465] text-slate-950 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Build my plates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
