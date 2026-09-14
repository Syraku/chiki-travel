import { siteConfig, buildGeneralWhatsAppUrl } from "@/config/site";
import { Container } from "@/components/layout/container";
import { MessageCircle, Phone, Clock, Shield, Mail } from "lucide-react";

export function CtaSection() {
  const whatsappUrl = buildGeneralWhatsAppUrl(
    "Halo CHIKI TRAVEL, saya ingin menanyakan jadwal dan memesan layanan perjalanan."
  );

  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 via-slate-900 to-stone-950 text-white relative overflow-hidden border-t border-stone-800">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12] pointer-events-none" />

      <Container size="narrow" className="relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-800/90 border border-stone-700/80 px-3.5 py-1 text-xs font-semibold text-stone-200 mb-6 shadow-xs">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            <span>Respon Cepat 24 Jam</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Rencanakan Perjalanan Anda Bersama {siteConfig.name}
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk cek jadwal keberangkatan, ketersediaan unit sewa,
            atau konsultasi paket perjalanan di wilayah Cianjur, Sukabumi, dan Jabodetabek.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-emerald-500 transition-all active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat WhatsApp ({siteConfig.contact.phone})</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-red-500/50 bg-gradient-to-b from-red-600/30 to-red-700/40 px-7 py-4 text-base font-semibold text-white hover:bg-red-600/50 hover:border-red-400 transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 text-red-300" />
              <span>Hubungi Telepon</span>
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-300 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-stone-400" />
              <span>Email: {siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Armada Terawat & Bersih</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>Jadwal Teratur 24 Jam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>Tanpa Biaya Reservasi Rumit</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
