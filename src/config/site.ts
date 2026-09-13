import { SiteConfig, ServiceItem, FleetItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "CHIKI TRAVEL",
  tagline: "Tour & travel Cianjur -Jabodetabek No 1 24 jam",
  description:
    "Layanan travel, rental kendaraan, paket wisata, private trip, dan antar jemput bandara profesional untuk area Cianjur, Sukabumi, Jabodetabek, dan sekitarnya.",
  area: "Cianjur, Sukabumi & Jabodetabek",
  logo: "/images/logo/wmremove-transformed.png",
  contact: {
    phone: "0821-1592-1736",
    whatsappNumber: "082115921736",
    whatsappUrl: "https://wa.me/6282115921736",
  },
  navItems: [
    { label: "Beranda", href: "#beranda" },
    { label: "Cek Rute", href: "#rute" },
    { label: "Layanan", href: "#layanan" },
    { label: "Armada", href: "#armada" },
    { label: "Paket Wisata", href: "#paket-wisata" },
    { label: "Destinasi", href: "#destinasi" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Kontak", href: "#kontak" },
  ],
  routes: [
    {
      origin: "Cianjur",
      destinations: [
        "Bandara",
        "Tangerang",
        "Jakarta",
        "Bekasi",
        "Depok",
        "Bogor",
      ],
    },
    {
      origin: "Sukabumi",
      destinations: [
        "Bandara",
        "Tangerang",
        "Jakarta",
        "Bekasi",
        "Depok",
        "Bogor",
      ],
    },
  ],
};

export const mainServices: ServiceItem[] = [
  {
    id: "travel-transportasi",
    title: "Travel & Transportasi",
    shortDesc: "Perjalanan Antar Kota",
    description:
      "Layanan transportasi antar kota Cianjur, Sukabumi, dan Jabodetabek dengan jadwal teratur dan kenyamanan utama.",
    iconName: "car",
    accentColor: "blue",
  },
  {
    id: "paket-wisata",
    title: "Paket Wisata",
    shortDesc: "Eksplorasi Destinasi",
    description:
      "Perjalanan wisata terorganisir untuk keluarga, komunitas, maupun instansi dengan rute fleksibel.",
    iconName: "map",
    accentColor: "emerald",
  },
  {
    id: "rental-kendaraan",
    title: "Rental Kendaraan",
    shortDesc: "Sewa Harian / Luar Kota",
    description:
      "Penyewaan kendaraan dengan sopir ramah dan berpengalaman untuk kenyamanan mobilitas harian Anda.",
    iconName: "key",
    accentColor: "amber",
  },
  {
    id: "private-trip",
    title: "Private Trip",
    shortDesc: "Perjalanan Privat & Fleksibel",
    description:
      "Layanan perjalanan eksklusif tanpa dicampur penumpang lain, jadwal dan rute dapat disesuaikan kebutuhan.",
    iconName: "users",
    accentColor: "indigo",
  },
  {
    id: "antar-jemput-bandara",
    title: "Antar Jemput Bandara",
    shortDesc: "Koneksi Bandara Tepat Waktu",
    description:
      "Penjemputan dan pengantaran bandara dengan estimasi waktu yang terjadwal agar perjalanan Anda bebas khawatir.",
    iconName: "plane",
    accentColor: "sky",
  },
];

export const fleetList: FleetItem[] = [
  {
    id: "kijang",
    name: "Kijang",
    image: "/images/fleet/Kijang.jpg",
  },
  {
    id: "hiace",
    name: "HiAce",
    image: "/images/fleet/HiAce.jpeg",
  },
  {
    id: "sigra",
    name: "Sigra",
    image: "/images/fleet/Sigra.jpg",
  },
  {
    id: "xenia",
    name: "Xenia",
    image: "/images/fleet/Xenia.jpg",
  },
  {
    id: "pajero",
    name: "Pajero",
    image: "/images/fleet/Pajero.webp",
  },
  {
    id: "elf-long-giga",
    name: "Elf Long Giga",
    image: "/images/fleet/ElfLongGiga.jpeg",
  },
];

export function buildRouteWhatsAppUrl(origin: string, destination: string): string {
  const text = `Halo CHIKI TRAVEL, tolong info layanan travel dari ${origin} ke ${destination}.`;
  return `https://wa.me/6282115921736?text=${encodeURIComponent(text)}`;
}

export function buildServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Halo CHIKI TRAVEL, saya ingin menanyakan informasi layanan ${serviceTitle}.`;
  return `https://wa.me/6282115921736?text=${encodeURIComponent(text)}`;
}

export function buildFleetWhatsAppUrl(vehicleName: string): string {
  const text = `Halo CHIKI TRAVEL, saya ingin menanyakan ketersediaan armada ${vehicleName} untuk perjalanan saya.`;
  return `https://wa.me/6282115921736?text=${encodeURIComponent(text)}`;
}

export function buildGeneralWhatsAppUrl(message?: string): string {
  if (!message) {
    return "https://wa.me/6282115921736";
  }
  return `https://wa.me/6282115921736?text=${encodeURIComponent(message)}`;
}
