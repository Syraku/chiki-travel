"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { MessageCircle, Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-xs transition-transform group-hover:scale-105 shrink-0">
              <Image
                src={siteConfig.logo}
                alt="CHIKI TRAVEL Logo"
                width={48}
                height={48}
                priority
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-lg sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
                {siteConfig.name}
              </span>
              <span className="truncate text-[10px] sm:text-[11px] font-bold text-red-600 uppercase tracking-wider">
                {siteConfig.area}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-red-600 px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all hover:shadow"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Tanya WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-600 text-white sm:hidden"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white py-4 px-2 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span className="text-center">Chat via WhatsApp ({siteConfig.contact.phone})</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
