import { SiteConfig, ServiceItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "CHIKI TRAVEL",
  tagline: "Layanan Travel & Transportasi Terpercaya",
  description:
    "Penyedia layanan transportasi dan perjalanan untuk wilayah Cianjur, Sukabumi, dan sekitarnya. Melayani travel, paket wisata, rental kendaraan, private trip, serta antar jemput bandara.",
  area: "Cianjur - Sukabumi & Sekitarnya",
  contact: {
    phone: "0821-1592-1736",
    whatsappNumber: "082115921736",
    whatsappUrl:
      "https://wa.me/6282115921736?text=Halo%20CHIKI%20TRAVEL%2C%20saya%20ingin%20konsultasi%20layanan%20perjalanan.",
  },
  navItems: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Kontak", href: "#kontak" },
  ],
};

export const mainServices: ServiceItem[] = [
  {
    id: "travel-transportasi",
    title: "Travel & Transportasi",
    description:
      "Layanan transportasi antar kota dan perjalanan reguler dengan armada terawat dan pengemudi berpengalaman.",
    iconName: "car",
  },
  {
    id: "paket-wisata",
    title: "Paket Wisata",
    description:
      "Pilihan perjalanan wisata terencana untuk keluarga, komunitas, maupun rombongan instansi.",
    iconName: "map",
  },
  {
    id: "rental-kendaraan",
    title: "Rental Kendaraan",
    description:
      "Penyewaan kendaraan dengan pilihan lepas kunci maupun dengan sopir sesuai kebutuhan perjalanan Anda.",
    iconName: "key",
  },
  {
    id: "private-trip",
    title: "Private Trip",
    description:
      "Perjalanan privat yang fleksibel, nyaman, dan disesuaikan khusus dengan rencana perjalanan Anda.",
    iconName: "users",
  },
  {
    id: "antar-jemput-bandara",
    title: "Antar Jemput Bandara",
    description:
      "Layanan antar jemput tepat waktu menuju dan dari bandara untuk kenyamanan perjalanan udara Anda.",
    iconName: "plane",
  },
];
