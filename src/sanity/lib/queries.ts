export const fleetQuery = `*[_type == "fleet"] | order(_createdAt asc) {
  _id,
  name,
  image,
  description,
  specifications
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  businessName,
  email,
  whatsappNumber,
  tagline,
  socialLinks
}`;

export const routesQuery = `*[_type == "route"] | order(_createdAt asc) {
  _id,
  origin,
  destination,
  description,
  ctaMessage
}`;
