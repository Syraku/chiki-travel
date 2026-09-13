import Image from "next/image";
import { fleetList, buildFleetWhatsAppUrl } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Car, MessageCircle, Shield } from "lucide-react";

export function FleetSection() {
  return (
    <section id="armada" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider mb-3">
            <Car className="h-3.5 w-3.5" />
            Pilihan Unit
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Armada CHIKI TRAVEL
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Pilihan armada kendaraan operasional untuk kebutuhan perjalanan travel,
            rental, antar jemput bandara, maupun private trip di wilayah Cianjur,
            Sukabumi, dan Jabodetabek.
          </p>
        </div>

        {/* 6 Real Fleet Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {fleetList.map((vehicle) => {
            const whatsappUrl = buildFleetWhatsAppUrl(vehicle.name);

            return (
              <div
                key={vehicle.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={vehicle.image}
                    alt={`Armada CHIKI TRAVEL - ${vehicle.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/95 text-slate-800 border-slate-200/80 shadow-xs text-[11px] font-semibold backdrop-blur-xs">
                      Armada Resmi
                    </Badge>
                  </div>
                </div>

                {/* Vehicle Details & WhatsApp CTA */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 border-t border-slate-100">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <Shield className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Siap melayani perjalanan antar kota & sewa</span>
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-xs hover:bg-emerald-700 transition-colors w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Tanya Armada {vehicle.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-600">
          * Hubungi langsung kontak WhatsApp CHIKI TRAVEL untuk konfirmasi ketersediaan unit, kapasitas sesuai rombongan, serta estimasi penjemputan.
        </div>
      </Container>
    </section>
  );
}
