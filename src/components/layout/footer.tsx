import { siteConfig, mainServices } from "@/config/site";
import { Container } from "./container";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-white">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Layanan Kami
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
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

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Wilayah Operasional
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{siteConfig.area}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Melayani rute dalam kota, antar kota, dan perjalanan jarak jauh.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontak & Pemesanan
            </h4>
            <div className="space-y-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors w-full justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.</p>
        </div>
      </Container>
    </footer>
  );
}
