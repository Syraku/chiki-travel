export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "car" | "map" | "key" | "users" | "plane";
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  area: string;
  contact: {
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  navItems: NavItem[];
}
