import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buildGeneralWhatsAppUrl } from "@/config/site";
import {
  Compass,
  Calendar,
  MapPin,
  MessageCircle,
  FileText,
  Clock,
} from "lucide-react";

export function PackagesPreviewSection() {
  const customTripWhatsAppUrl = buildGeneralWhatsAppUrl(
    "Halo CHIKI TRAVEL, saya ingin konsultasi rencana paket wisata / custom trip."
  );

  const placeholderCards = [
    {
      category: "Wisata Alam & Pegunungan",
      title: "Eksplorasi Cianjur & Sekitarnya",
      note: "Rincian itinerary, armada, dan titik kumpul sedang dipersiapkan.",
    },
    {
      category: "Wisata Bahari & Pantai",
      title: "Jelajah Jalur Wisata Sukabumi",
      note: "Pilihan durasi perjalanan dan fasilitas armada segera diperbarui.",
    },
    {
      category: "Custom / Rombongan",
      title: "Paket Agenda Khusus & Perusahaan",
      note: "Dapat disesuaikan sepenuhnya sesuai jadwal dan jumlah peserta.",
    },
  ];

  return (
    <section id="paket-wisata" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 uppercase tracking-wider mb-3">
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            Paket Wisata
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Pilihan Paket Wisata Menarik
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Daftar paket wisata resmi, jadwal itinerary, serta fasilitas lengkap
            sedang dipersiapkan dan akan terintegrasi melalui CMS. Anda tetap dapat melakukan
            konsultasi rute perjalanan kustom langsung bersama kami.
          </p>
        </div>

        {/* Informational placeholder banner */}
        <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-dashed border-amber-300 bg-amber-50/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-amber-950">
                Informasi Resmi Paket Sedang Disusun
              </p>
              <p className="text-xs text-amber-800">
                Harga resmi dan jadwal keberangkatan akan dirilis setelah diverifikasi oleh tim CHIKI TRAVEL.
              </p>
            </div>
          </div>
          <Badge className="bg-amber-200 text-amber-900 border-amber-300 font-semibold shrink-0">
            Tahap Persiapan CMS
          </Badge>
        </div>

        {/* Structural Placeholder Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderCards.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:bg-white hover:border-slate-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-700">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Clock className="h-3 w-3" />
                    Segera Hadir
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.note}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>Rute: Disesuaikan dengan kebutuhan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>Jadwal: Reservasi h-3 atau h-7</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={customTripWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white border border-slate-300 py-2.5 px-3 text-xs font-bold text-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Konsultasi Paket Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom trip CTA block */}
        <div className="relative overflow-hidden mt-12 rounded-2xl bg-stone-900 border border-stone-800 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-red-500 before:via-amber-500 before:to-red-600">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Butuh Rencana Perjalanan Wisata Khusus?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Kami siap melayani kebutuhan perjalanan wisata privat, rombongan keluarga,
              maupun kegiatan dinas/instansi dari Cianjur dan Sukabumi.
            </p>
          </div>

          <a
            href={customTripWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 shrink-0 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat Rencana Wisata</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
