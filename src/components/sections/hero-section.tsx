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
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50/40 pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

      <Container className="relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Badge variant="amber" className="px-3 py-1 text-xs font-semibold">
                  <Clock className="mr-1.5 inline h-3.5 w-3.5 text-amber-600" />
                  Layanan 24 Jam
                </Badge>
                <Badge variant="default" className="px-3 py-1 text-xs font-semibold">
                  <MapPin className="mr-1.5 inline h-3.5 w-3.5 text-red-600" />
                  Cianjur – Jabodetabek
                </Badge>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Perjalanan Aman & Nyaman Bersama{" "}
                <span className="text-red-600">{siteConfig.name}</span>
              </h1>

              <p className="mt-4 text-base font-semibold text-red-700 sm:text-lg">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0">
                Layanan transportasi antar kota Cianjur, Sukabumi, dan Jabodetabek.
                Melayani travel reguler, antar jemput bandara, sewa kendaraan, private trip,
                hingga agenda wisata keluarga dan instansi dengan kemudahan reservasi via WhatsApp.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-emerald-700 active:scale-[0.99] sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Tanya via WhatsApp</span>
                </a>
                <a
                  href="#rute"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-red-200 hover:bg-slate-50 hover:text-red-700 sm:w-auto"
                >
                  <Car className="h-4 w-4 text-red-600" />
                  <span>Cek Rute Tersedia</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-red-100/60 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-red-100 bg-white/80 p-3 shadow-xl shadow-red-100/40 backdrop-blur-sm">
                <Image
                  src="/travel-car.svg"
                  alt="Ilustrasi armada CHIKI TRAVEL"
                  width={800}
                  height={460}
                  priority
                  className="h-auto w-full rounded-2xl"
                />
                <div className="absolute bottom-7 left-7 rounded-full border border-white/70 bg-white/95 px-4 py-2 text-xs font-bold text-red-700 shadow-md">
                  Armada nyaman untuk perjalanan Anda
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition-colors hover:border-red-200">
              <div className="mb-1 flex items-center gap-2 text-red-600">
                <Car className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Travel Rutin</span>
              </div>
              <p className="text-xs leading-snug text-slate-600">Jadwal harian Cianjur & Sukabumi ke Jabodetabek.</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition-colors hover:border-red-200">
              <div className="mb-1 flex items-center gap-2 text-red-600">
                <Plane className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Antar Bandara</span>
              </div>
              <p className="text-xs leading-snug text-slate-600">Antar & jemput tepat waktu langsung ke terminal penerbangan.</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition-colors hover:border-amber-200">
              <div className="mb-1 flex items-center gap-2 text-amber-600">
                <CalendarCheck className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Sewa & Trip</span>
              </div>
              <p className="text-xs leading-snug text-slate-600">Pilihan rental harian & private trip fleksibel keluarga.</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition-colors hover:border-emerald-200">
              <div className="mb-1 flex items-center gap-2 text-emerald-700">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">24 Jam Siap</span>
              </div>
              <p className="text-xs leading-snug text-slate-600">Konsultasi armada dan jadwal kapan pun melalui WhatsApp.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
