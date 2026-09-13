import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { MessageCircle, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-sky-700">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-wide">
              {siteConfig.area}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              {siteConfig.contact.phone}
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
