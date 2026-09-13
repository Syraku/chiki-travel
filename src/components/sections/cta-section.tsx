import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { MessageCircle, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 bg-sky-700 text-white">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Siap Melakukan Perjalanan Bersama {siteConfig.name}?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-xl mx-auto leading-relaxed">
            Konsultasikan rencana perjalanan, jadwal keberangkatan, atau sewa armada
            Anda langsung bersama tim kami melalui WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg hover:bg-emerald-400 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat WhatsApp ({siteConfig.contact.phone})</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-sky-300/40 bg-sky-800/40 px-6 py-4 text-base font-medium text-white hover:bg-sky-800/80 transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Panggilan Telepon</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-sky-200">
            Wilayah layanan: Cianjur, Sukabumi, dan rute perjalanan terkait.
          </p>
        </div>
      </Container>
    </section>
  );
}
