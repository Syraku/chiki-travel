import { mainServices, buildServiceWhatsAppUrl } from "@/config/site";
import { Container } from "@/components/layout/container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Car,
  Compass,
  KeyRound,
  Users,
  PlaneTakeoff,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="h-6 w-6 text-sky-600" />;
      case "map":
        return <Compass className="h-6 w-6 text-emerald-600" />;
      case "key":
        return <KeyRound className="h-6 w-6 text-amber-600" />;
      case "users":
        return <Users className="h-6 w-6 text-indigo-600" />;
      case "plane":
        return <PlaneTakeoff className="h-6 w-6 text-sky-600" />;
      default:
        return <Car className="h-6 w-6 text-sky-600" />;
    }
  };

  const getAccentBg = (iconName: string) => {
    switch (iconName) {
      case "map":
        return "bg-emerald-50 ring-emerald-200/80";
      case "key":
        return "bg-amber-50 ring-amber-200/80";
      case "users":
        return "bg-indigo-50 ring-indigo-200/80";
      default:
        return "bg-sky-50 ring-sky-200/80";
    }
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50 border-y border-slate-200/60">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Layanan Unggulan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            5 Layanan Utama CHIKI TRAVEL
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Menyediakan kenyamanan mobilitas harian, perjalanan bisnis, maupun rekreasi keluarga di wilayah Cianjur, Sukabumi, dan sekitarnya.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => {
            const whatsappUrl = buildServiceWhatsAppUrl(service.title);

            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between border-slate-200 bg-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${getAccentBg(
                      service.iconName
                    )}`}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {service.shortDesc}
                    </span>
                    <CardTitle className="text-xl text-slate-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 border-t border-slate-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full rounded-lg bg-emerald-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Konsultasi Layanan
                    </span>
                    <span className="font-bold">Chat WA →</span>
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
