import { defineType } from "sanity";

const imageField = (name: string, title: string) => ({
  name,
  title,
  type: "image",
  options: { hotspot: true },
});

const slugField = {
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
};

export const schemaTypes = [
  defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
      { name: "businessName", title: "Business Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "whatsappNumber", title: "WhatsApp Number", type: "string" },
      { name: "tagline", title: "Tagline", type: "string" },
      {
        name: "socialLinks",
        title: "Social Links",
        type: "object",
        fields: [
          { name: "instagram", title: "Instagram", type: "url" },
          { name: "facebook", title: "Facebook", type: "url" },
          { name: "tiktok", title: "TikTok", type: "url" },
        ],
      },
    ],
  }),

  defineType({
    name: "route",
    title: "Routes",
    type: "document",
    fields: [
      { name: "origin", title: "Origin", type: "string", validation: (Rule) => Rule.required() },
      { name: "destination", title: "Destination", type: "string", validation: (Rule) => Rule.required() },
      { name: "description", title: "Description", type: "text" },
      { name: "ctaMessage", title: "WhatsApp CTA Message", type: "string" },
    ],
  }),

  defineType({
    name: "tourPackage",
    title: "Tour Packages",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
      slugField,
      { name: "shortDescription", title: "Short Description", type: "text" },
      { name: "description", title: "Description", type: "array", of: [{ type: "block" }] },
      imageField("thumbnail", "Thumbnail"),
      { name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] },
      { name: "itinerary", title: "Itinerary", type: "array", of: [{ type: "block" }] },
      { name: "facilities", title: "Facilities", type: "array", of: [{ type: "string" }] },
      { name: "cta", title: "CTA Message", type: "string" },
    ],
  }),

  defineType({
    name: "fleet",
    title: "Fleet",
    type: "document",
    fields: [
      { name: "name", title: "Vehicle Name", type: "string", validation: (Rule) => Rule.required() },
      imageField("image", "Vehicle Image"),
      { name: "description", title: "Description", type: "text" },
      {
        name: "specifications",
        title: "Specifications",
        type: "object",
        fields: [
          { name: "capacity", title: "Capacity", type: "string" },
          { name: "facilities", title: "Facilities", type: "array", of: [{ type: "string" }] },
        ],
      },
    ],
  }),

  defineType({
    name: "destination",
    title: "Destinations",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
      slugField,
      { name: "description", title: "Description", type: "array", of: [{ type: "block" }] },
      imageField("image", "Main Image"),
      { name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] },
      {
        name: "relatedPackages",
        title: "Related Packages",
        type: "array",
        of: [{ type: "reference", to: [{ type: "tourPackage" }] }],
      },
      {
        name: "relatedRoutes",
        title: "Related Routes",
        type: "array",
        of: [{ type: "reference", to: [{ type: "route" }] }],
      },
    ],
  }),

  defineType({
    name: "promotion",
    title: "Promotions",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
      { name: "description", title: "Description", type: "text" },
      imageField("image", "Image"),
      { name: "validFrom", title: "Valid From", type: "date" },
      { name: "validUntil", title: "Valid Until", type: "date" },
      { name: "cta", title: "CTA Message", type: "string" },
    ],
  }),

  defineType({
    name: "testimonial",
    title: "Testimonials",
    type: "document",
    fields: [
      { name: "customerName", title: "Customer Name", type: "string", validation: (Rule) => Rule.required() },
      { name: "testimonial", title: "Testimonial", type: "text", validation: (Rule) => Rule.required() },
      imageField("photo", "Photo"),
    ],
  }),

  defineType({
    name: "faq",
    title: "FAQ",
    type: "document",
    fields: [
      { name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() },
      { name: "answer", title: "Answer", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() },
    ],
  }),

  defineType({
    name: "galleryItem",
    title: "Gallery",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string" },
      imageField("image", "Image"),
      { name: "category", title: "Category", type: "string" },
    ],
  }),
];
