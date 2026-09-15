"use client";

import * as React from "react";
import { buildRouteWhatsAppUrl } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  ArrowRight,
  MessageCircle,
  Car,
  Plane,
  Building2,
  Navigation,
} from "lucide-react";

type RouteItem = {
  origin: string;
  destination: string;
  description?: string;
  ctaMessage?: string;
};

export function QuickRouteSection({ routes }: { routes: RouteItem[] }) {
  const origins = [...new Set(routes.map((route) => route.origin))];
  const [selectedOrigin, setSelectedOrigin] = React.useState<string>(origins[0] || "Cianjur");
  const destinations = routes
    .filter((route) => route.origin === selectedOrigin)
    .map((route) => route.destination);
  const [selectedDestination, setSelectedDestination] = React.useState<string>(destinations[0] || "Jakarta");

  React.useEffect(() => {
    if (!destinations.includes(selectedDestination)) {
      setSelectedDestination(destinations[0] || "Jakarta");
    }
  }, [selectedOrigin, destinations, selectedDestination]);

  const whatsappUrl = buildRouteWhatsAppUrl(selectedOrigin, selectedDestination);

  const getDestinationIcon = (dest: string) => {
    if (dest.toLowerCase().includes("bandara")) return <Plane className="h-4 w-4 text-red-600" />;
    if (dest.toLowerCase().includes("jakarta") || dest.toLowerCase().includes("tangerang")) {
      return <Building2 className="h-4 w-4 text-red-600" />;
    }
    return <Car className="h-4 w-4 text-red-600" />;
  };

  return (
    <section id="rute" className="py-14 sm:py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="h-3.5 w-3.5 text-red-600" />
            Cek Rute Perjalanan
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Pilihan Rute Travel & Antar Jemput
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Temukan rute perjalanan dari Cianjur atau Sukabumi menuju wilayah
            Jabodetabek dan bandara. Hubungi kami untuk konfirmasi ketersediaan armada.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50/80 to-white p-4 sm:p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">1. Pilih Kota Asal:</label>
              <div className="grid grid-cols-2 gap-3">
                {origins.map((origin) => (
                  <button key={origin} type="button" onClick={() => setSelectedOrigin(origin)} className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 sm:px-4 text-sm font-bold transition-all ${selectedOrigin === origin ? "bg-gradient-to-b from-red-500 via-red-600 to-red-600 text-white shadow-sm shadow-red-600/25 ring-2 ring-red-600/30 border-t border-red-400/40 active:translate-y-px" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-red-200"}`}>
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{origin}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">2. Pilih Kota / Lokasi Tujuan:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {destinations.map((dest) => (
                  <button key={dest} type="button" onClick={() => setSelectedDestination(dest)} className={`flex items-center gap-2 rounded-xl p-3 text-xs sm:text-sm font-semibold text-left transition-all min-w-0 ${selectedDestination === dest ? "bg-gradient-to-b from-white via-red-50 to-red-100/70 border border-red-300 text-red-950 shadow-xs ring-1 ring-red-300/60" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-red-200"}`}>
                    {getDestinationIcon(dest)}
                    <span className="min-w-0 break-words">{dest}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-2 text-slate-900">
                <span className="font-bold text-base truncate">{selectedOrigin}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-red-600" />
                <span className="font-bold text-base text-red-700 truncate">{selectedDestination}</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 sm:px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>Tanya Rute Ini via WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 text-center sm:text-left italic leading-relaxed">* Tarif, titik jemput, serta estimasi jam keberangkatan akan dikonfirmasikan langsung melalui WhatsApp sesuai permintaan Anda.</p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 text-center">Daftar Lengkap Rute dari {selectedOrigin}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {destinations.map((dest) => {
              const cardUrl = buildRouteWhatsAppUrl(selectedOrigin, dest);
              return (
                <div key={dest} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-xs">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-white to-red-50 text-red-600 border border-red-200/60 shadow-xs">{getDestinationIcon(dest)}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 break-words">{selectedOrigin} → {dest}</p>
                      <p className="text-xs text-slate-500">Travel & Antar Jemput</p>
                    </div>
                  </div>
                  <a href={cardUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors"><span>Pesan</span><ArrowRight className="h-3 w-3" /></a>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
