export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: "car" | "map" | "key" | "users" | "plane";
  accentColor: string;
}

export interface RouteOption {
  origin: string;
  destinations: string[];
}

export interface FleetItem {
  id: string;
  name: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  area: string;
  logo: string;
  contact: {
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  navItems: NavItem[];
  routes: RouteOption[];
}
