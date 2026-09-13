"use client";

import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Bantuan WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
      <div className="hidden sm:block rounded-xl bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 shadow-md pointer-events-none transition-opacity duration-200">
        Chat WhatsApp 24 Jam
      </div>

      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi CHIKI TRAVEL via WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-emerald-500 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </aside>
  );
}
