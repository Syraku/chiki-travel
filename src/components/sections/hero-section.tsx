import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, ShieldCheck, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-sky-100/90 text-sky-800 border-sky-200/80 px-4 py-1 text-xs">
              Wilayah Operasional: {siteConfig.area}
            </Badge>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Perjalanan Aman & Nyaman Bersama{" "}
            <span className="text-sky-600">{siteConfig.name}</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Solusi transportasi terpercaya di Cianjur, Sukabumi, dan sekitarnya.
            Melayani travel antar kota, rental kendaraan, paket wisata, private trip,
            hingga antar jemput bandara dengan layanan prima.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-md hover:bg-emerald-700 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Hubungi via WhatsApp</span>
            </a>

            <a
              href="#layanan"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200/80 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Cianjur & Sukabumi</h3>
                <p className="text-xs text-slate-500 mt-0.5">Cakupan rute lokal dan antar kota</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Pelayanan Responsif</h3>
                <p className="text-xs text-slate-500 mt-0.5">Konsultasi jadwal & rute mudah via WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Armada Terawat</h3>
                <p className="text-xs text-slate-500 mt-0.5">Kondisi kendaraan siap jalan & prima</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
