import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Clock,
  MapPin,
  Car,
  Plane,
  CalendarCheck,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50/50 pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo Emblem */}
          <div className="flex justify-center mb-5">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200/90 ring-4 ring-sky-100/80">
              <Image
                src={siteConfig.logo}
                alt="CHIKI TRAVEL Logo"
                width={96}
                height={96}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Badge: Tagline & 24 Jam */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge className="bg-amber-100 text-amber-900 border-amber-300 font-semibold px-3 py-1 text-xs">
              <Clock className="mr-1.5 h-3.5 w-3.5 text-amber-600 inline" />
              Layanan 24 Jam
            </Badge>
            <Badge className="bg-sky-100 text-sky-800 border-sky-200 font-semibold px-3 py-1 text-xs">
              <MapPin className="mr-1.5 h-3.5 w-3.5 text-sky-600 inline" />
              Cianjur – Jabodetabek
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
            Perjalanan Aman & Nyaman Bersama{" "}
            <span className="text-sky-600 block sm:inline">
              {siteConfig.name}
            </span>
          </h1>

          {/* Tagline citation & description */}
          <p className="mt-4 text-base font-medium text-sky-800 sm:text-lg">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-600">
            Layanan transportasi antar kota Cianjur, Sukabumi, dan Jabodetabek.
            Melayani travel reguler, antar jemput bandara, sewa kendaraan, private trip,
            hingga agenda wisata keluarga dan instansi dengan kemudahan reservasi via WhatsApp.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-emerald-700 transition-all active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Tanya via WhatsApp</span>
            </a>

            <a
              href="#rute"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
            >
              <Car className="h-4 w-4 text-sky-600" />
              <span>Cek Rute Tersedia</span>
            </a>
          </div>

          {/* Highlight feature bar */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-left">
            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sky-700 mb-1">
                <Car className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Travel Rutin
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Jadwal harian Cianjur & Sukabumi ke Jabodetabek.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sky-700 mb-1">
                <Plane className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Antar Bandara
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Antar & jemput tepat waktu langsung ke terminal penerbangan.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 mb-1">
                <CalendarCheck className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Sewa & Trip
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Pilihan rental harian & private trip fleksibel keluarga.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  24 Jam Siap
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Konsultasi armada dan jadwal kapan pun melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
