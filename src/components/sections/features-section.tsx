import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { CheckCircle2, MessageSquare, Shield, Route } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Route,
      title: "Rute Cianjur & Sukabumi",
      description:
        "Melayani rute wilayah Cianjur, Sukabumi, serta perjalanan antar kota dengan rute optimal.",
    },
    {
      icon: MessageSquare,
      title: "Pemesanan Praktis via WhatsApp",
      description:
        "Konsultasi jadwal, ketersediaan unit, dan detail perjalanan cepat melalui kontak WhatsApp resmi.",
    },
    {
      icon: Shield,
      title: "Armada Nyaman & Siap Jalan",
      description:
        "Kendaraan dicek secara berkala guna memastikan keamanan serta kenyamanan setiap penumpang.",
    },
    {
      icon: CheckCircle2,
      title: "Pilihan Layanan Fleksibel",
      description:
        "Tersedia sewa kendaraan, travel reguler, paket wisata, maupun perjalanan privat sesuai kebutuhan.",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Keunggulan
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kenapa Memilih {siteConfig.name}?
          </p>
          <p className="mt-4 text-base text-slate-600">
            Komitmen kami adalah memberikan pengalaman perjalanan yang aman, tepat waktu, dan mudah diakses.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="relative rounded-xl border border-slate-100 bg-slate-50/70 p-6 transition-all hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
