import Image from "next/image";
import { siteConfig, mainServices } from "@/config/site";
import { Container } from "./container";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="kontak"
      className="border-t border-slate-200 bg-slate-900 text-slate-300"
    >
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white border border-slate-700 shrink-0">
                <Image
                  src={siteConfig.logo}
                  alt="CHIKI TRAVEL Logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-xs font-semibold text-amber-400">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              5 Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {mainServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#layanan"
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Rute Perjalanan
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Asal Keberangkatan:</p>
              <p>Cianjur & Sukabumi</p>
              <p className="font-semibold text-slate-300 pt-1">Kota Tujuan:</p>
              <p>Bandara, Tangerang, Jakarta, Bekasi, Depok, Bogor</p>
              <div className="flex items-center gap-1.5 text-amber-300 pt-2">
                <Clock className="h-3.5 w-3.5" />
                <span>Pelayanan 24 Jam</span>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kontak Resmi
            </h4>
            <div className="space-y-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-500 transition-colors w-full justify-center shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat WhatsApp Resmi</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{siteConfig.area}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-[11px] text-slate-500">
            Layanan Travel, Rental, Paket Wisata, Private Trip & Bandara
          </p>
        </div>
      </Container>
    </footer>
  );
}
