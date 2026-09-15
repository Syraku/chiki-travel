export interface SanitySiteSettings {
  businessName?: string;
  email?: string;
  whatsappNumber?: string;
  tagline?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export interface SanityFleetItem {
  _id: string;
  name: string;
  image?: unknown;
  description?: string;
  specifications?: {
    capacity?: string;
    facilities?: string[];
  };
}

export interface SanityRouteItem {
  _id: string;
  origin: string;
  destination: string;
  description?: string;
  ctaMessage?: string;
}
