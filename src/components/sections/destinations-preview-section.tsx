import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buildGeneralWhatsAppUrl } from "@/config/site";
import {
  MapPin,
  Trees,
  Waves,
  Building,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export function DestinationsPreviewSection() {
  const destinationCategories = [
    {
      title: "Cianjur & Jalur Puncak",
      focus: "Pegunungan, Kebun Teh & Sejuk Alam",
      icon: Trees,
      description:
        "Wilayah dataran tinggi dengan suasana asri. CHIKI TRAVEL melayani transportasi antar jemput dan drop-off rute Cianjur – Puncak – Jabodetabek.",
    },
    {
      title: "Sukabumi & Jalur Selatan",
      focus: "Pesisir, Geopark & Wisata Alam",
      icon: Waves,
      description:
        "Jelajahi keindahan pesisir dan panorama alam Sukabumi dengan kenyamanan armada privat maupun sewa harian.",
    },
    {
      title: "Jabodetabek & Bandara",
      focus: "Mobilitas Kota & Penerbangan",
      icon: Building,
      description:
        "Akses perjalanan langsung dari Cianjur dan Sukabumi menuju Jakarta, Tangerang, Bekasi, Depok, Bogor, dan Bandara.",
    },
  ];

  return (
    <section id="destinasi" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider mb-3">
            <MapPin className="h-3.5 w-3.5" />
            Cakupan Destinasi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Wilayah Tujuan Populer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            CHIKI TRAVEL menghubungkan Anda dengan berbagai tujuan strategis. Galeri dan detail rekomendasi destinasi lengkap akan dikelola secara berkala melalui CMS.
          </p>
        </div>

        {/* Informative placeholder cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinationCategories.map((item, index) => {
            const IconComponent = item.icon;
            const destUrl = buildGeneralWhatsAppUrl(
              `Halo CHIKI TRAVEL, saya ingin menanyakan rute dan transportasi menuju destinasi wilayah ${item.title}.`
            );

            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-200">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <Badge variant="subtle" className="text-[10px] text-slate-500 font-medium">
                      Katalog Segera Hadir
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mt-1">
                    {item.focus}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={destUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                      Tanya Transportasi ke Wilayah Ini
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about CMS updates */}
        <p className="mt-8 text-xs text-slate-500 text-center">
          * Foto dokumentasi resmi dan daftar objek wisata terperinci akan diperbarui secara berkala setelah sistem CMS Sanity diintegrasikan.
        </p>
      </Container>
    </section>
  );
}
