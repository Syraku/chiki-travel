import { mainServices } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Car, Compass, KeyRound, Users, PlaneTakeoff, MessageCircle } from "lucide-react";

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="h-6 w-6 text-sky-600" />;
      case "map":
        return <Compass className="h-6 w-6 text-sky-600" />;
      case "key":
        return <KeyRound className="h-6 w-6 text-sky-600" />;
      case "users":
        return <Users className="h-6 w-6 text-sky-600" />;
      case "plane":
        return <PlaneTakeoff className="h-6 w-6 text-sky-600" />;
      default:
        return <Car className="h-6 w-6 text-sky-600" />;
    }
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Layanan Kami
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Solusi Perjalanan Lengkap & Fleksibel
          </p>
          <p className="mt-4 text-base text-slate-600">
            Pilih layanan yang sesuai dengan kebutuhan mobilitas Anda di Cianjur, Sukabumi, dan sekitarnya.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => {
            const encodedService = encodeURIComponent(service.title);
            const serviceWhatsappUrl = `https://wa.me/6282115921736?text=Halo%20CHIKI%20TRAVEL%2C%20saya%20ingin%20menanyakan%20informasi%20layanan%20${encodedService}.`;

            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200">
                    {getIcon(service.iconName)}
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 border-t border-slate-100">
                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Tanya via WhatsApp</span>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
