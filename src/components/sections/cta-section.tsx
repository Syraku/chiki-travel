import { siteConfig, buildGeneralWhatsAppUrl } from "@/config/site";
import { Container } from "@/components/layout/container";
import { MessageCircle, Phone, Clock, Shield } from "lucide-react";

export function CtaSection() {
  const whatsappUrl = buildGeneralWhatsAppUrl(
    "Halo CHIKI TRAVEL, saya ingin menanyakan jadwal dan memesan layanan perjalanan."
  );

  return (
    <section className="py-20 bg-gradient-to-b from-sky-800 to-sky-950 text-white relative overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <Container size="narrow" className="relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-700/80 border border-sky-600 px-3.5 py-1 text-xs font-semibold text-sky-200 mb-6">
            <Clock className="h-3.5 w-3.5 text-amber-300" />
            <span>Respon Cepat 24 Jam</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Rencanakan Perjalanan Anda Bersama {siteConfig.name}
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-sky-100 max-w-xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk cek jadwal keberangkatan, ketersediaan unit sewa,
            atau konsultasi paket perjalanan di wilayah Cianjur, Sukabumi, dan Jabodetabek.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-emerald-400 transition-all active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat WhatsApp ({siteConfig.contact.phone})</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-sky-400/30 bg-sky-900/50 px-7 py-4 text-base font-semibold text-white hover:bg-sky-900/80 transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Hubungi Telepon</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-sky-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-sky-200">
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
