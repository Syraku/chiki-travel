import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import {
  Clock,
  MessageSquareCheck,
  ShieldCheck,
  Layers,
  MapPin,
  Check,
} from "lucide-react";

export function FeaturesSection() {
  const advantages = [
    {
      icon: Clock,
      title: "Layanan 24 Jam",
      description:
        "Siap melayani kebutuhan perjalanan dan konsultasi rute kapan pun untuk rute Cianjur, Sukabumi, dan Jabodetabek.",
    },
    {
      icon: MessageSquareCheck,
      title: "Reservasi Mudah via WhatsApp",
      description:
        "Tanpa prosedur pemesanan yang rumit. Hubungi langsung kontak WhatsApp kami untuk info ketersediaan dan penjemputan.",
    },
    {
      icon: ShieldCheck,
      title: "Armada Siap Jalan & Nyaman",
      description:
        "Kondisi armada selalu diperiksa berkala untuk memastikan keamanan dan kenyamanan penumpang sepanjang rute.",
    },
    {
      icon: Layers,
      title: "Pilihan Layanan Terpadu",
      description:
        "Melayani travel reguler, rental kendaraan, paket wisata, perjalanan privat hingga antar jemput bandara dalam satu pintu.",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-red-600" />
            Keunggulan Layanan
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Kenapa Memilih {siteConfig.name}?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Komitmen kami adalah memberikan kemudahan mobilitas antar kota yang aman, tepat waktu, dan mudah diakses setiap saat.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-md hover:border-red-300"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-white to-red-50 text-red-600 ring-1 ring-red-200/80 shadow-xs">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                  <span>Layanan Terpercaya</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner */}
        <div className="mt-12 rounded-xl border border-stone-200 bg-stone-50 p-4 text-center text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2">
          <MapPin className="h-4 w-4 text-red-600 shrink-0" />
          <span>
            Melayani titik jemput di wilayah <strong>Cianjur, Sukabumi</strong> dan sekitarnya dengan tujuan utama seluruh area <strong>Jabodetabek dan Bandara</strong>.
          </span>
        </div>
      </Container>
    </section>
  );
}
