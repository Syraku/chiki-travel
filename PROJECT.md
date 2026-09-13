# CHIKI TRAVEL — Project Specification

## 1. Project Overview

CHIKI TRAVEL is a production travel and transportation website serving customers around Cianjur, Sukabumi, and surrounding areas.

The website's primary goals are:

* Present CHIKI TRAVEL's services clearly.
* Help visitors discover routes, tours, rentals, and destinations.
* Build trust through professional design and useful information.
* Convert visitors into WhatsApp inquiries/bookings.
* Allow business content to be managed through a CMS in the future.
* Be fast, responsive, accessible, SEO-friendly, and maintainable.

The website is NOT an online payment system and does NOT need customer accounts or a complex booking engine.

---

## 2. Business Information

**Business name:** CHIKI TRAVEL

**Existing tagline:**
"Tour & travel Cianjur -Jabodetabek No 1 24 jam"

The tagline may be visually refined later, but do not invent a new business claim.

**Primary WhatsApp:**
082115921736

**WhatsApp URL:**
https://wa.me/6282115921736

**Official Email:**
kristiseptia99@gmail.com

**Language:**
Bahasa Indonesia only.

**Target audience:**
General customers looking for travel, transportation, tourism, vehicle rental, private trips, and airport transfers.

Do not invent:

* Prices
* Customer reviews
* Testimonials
* Vehicle specifications
* Tour itineraries
* Promotions
* Business achievements
* Company history
* Addresses
* Social media handles
* Operating hours

unless the information is explicitly provided later.

---

## 3. Main Services

The website must support these five main services:

1. Travel / Transportasi
2. Paket Wisata
3. Rental Kendaraan
4. Private Trip
5. Antar Jemput Bandara

Each service should eventually have its own information/detail page or appropriate CMS-driven content.

Primary conversion action:
**Tanya / Booking via WhatsApp**

---

## 4. Current Routes

### Cianjur →

* Bandara
* Tangerang
* Jakarta
* Bekasi
* Depok
* Bogor

### Sukabumi →

* Bandara
* Tangerang
* Jakarta
* Bekasi
* Depok
* Bogor

Route information should be CMS-driven in the future.

Do not hardcode prices until the business provides them.

---

## 5. Website Goals

Primary user flow:

Discover service
→ Explore details
→ Build trust
→ Contact / ask questions
→ WhatsApp

The website should make WhatsApp conversion extremely easy without becoming aggressive or spammy.

WhatsApp links should use appropriate prefilled messages when useful.

Example:

"Tolong info layanan travel dari Cianjur ke Jakarta."

Do not create complicated online booking forms unless specifically requested later.

---

## 6. Sitemap

### Main pages

* `/`
* `/rute`
* `/paket-wisata`
* `/rental`
* `/private-trip`
* `/antar-jemput-bandara`
* `/destinasi`
* `/kontak`

### Future pages

* `/promo`
* `/galeri`
* `/testimoni`
* `/faq`
* `/blog`
* `/tentang`

Dynamic CMS pages may be introduced later.

---

## 7. Homepage Structure

The homepage should eventually contain:

### Hero

Clear CHIKI TRAVEL introduction.

Primary CTA:
**Tanya via WhatsApp**

Secondary CTA:
Explore services / routes.

Use strong travel photography once real assets are provided.

Do not use fake stock-like business imagery as if it were CHIKI TRAVEL's actual fleet or customers.

### Route Quick Access

Allow users to quickly discover available routes.

Possible interaction:
Origin → Destination → WhatsApp CTA.

### Services

Show the five primary services:

* Travel & Transportasi
* Paket Wisata
* Rental Kendaraan
* Private Trip
* Antar Jemput Bandara

### Paket Wisata

CMS-driven cards in the future.

Do not invent packages yet.

### Destinasi

Show popular destinations once actual destination data is provided.

### Why CHIKI TRAVEL

Show genuine business advantages only after they are provided.

Do not invent claims.

### Promo

Future CMS-driven section.

### Testimonials

Future CMS-driven section.

Never create fake testimonials.

### Gallery

Future CMS-driven section.

### Final CTA

Strong but clean WhatsApp CTA.

---

## 8. Route Page

`/rute`

Features:

* Origin filtering
* Destination filtering
* Route cards
* Route details
* WhatsApp CTA

Current origins:

* Cianjur
* Sukabumi

Current destinations:

* Bandara
* Tangerang
* Jakarta
* Bekasi
* Depok
* Bogor

Prices should only appear when provided by the business.

---

## 9. Package Tourism

`/paket-wisata`

Future CMS-driven content.

Each package may eventually contain:

* Name
* Description
* Destination
* Duration
* Itinerary
* Facilities
* Exclusions
* Gallery
* Price
* CTA

Do not invent any of these values.

---

## 10. Vehicle Rental

`/rental`

Future CMS-driven vehicle content.

Possible fields:

* Vehicle name
* Image
* Capacity
* Facilities
* Rental conditions
* Price
* CTA

Do not invent vehicle data.

---

## 11. Private Trip

`/private-trip`

Explain the private-trip service clearly.

Future inquiry information may include:

* Destination
* Date
* Number of people
* Transportation needs
* Other requests

The primary conversion remains WhatsApp.

---

## 12. Airport Transfer

`/antar-jemput-bandara`

Explain airport transfer services and supported routes.

Use actual route/business information only.

Primary CTA:
WhatsApp.

---

## 13. Destinations

`/destinasi`

Future CMS-driven destination pages.

Possible content:

* Destination name
* Description
* Images
* Location
* Related packages
* Related routes

Do not invent destination-specific business claims.

---

## 14. CMS

CMS planned:
**Sanity**

CMS integration should happen after the initial frontend foundation is stable.

Planned content types:

* Route
* Package
* Vehicle
* Destination
* Promotion
* Gallery
* Testimonial
* Article
* FAQ

The business owner should eventually be able to update content without modifying source code.

Do not create a custom admin dashboard unless explicitly requested.

---

## 15. Design Direction

Overall feeling:

**Modern Indonesian travel platform + tropical + colorful + adventure.**

The website can take inspiration from the usability and cleanliness of modern travel platforms such as Traveloka, but MUST NOT copy Traveloka's branding, layout, assets, or proprietary design.

### Visual direction

Preferred:

* Clean white/neutral base
* Blue as primary brand color
* Orange/yellow/green as supporting accents
* Strong photography
* Clear typography
* Moderate border radius
* Subtle shadows
* Clean cards
* Spacious layouts
* Strong visual hierarchy
* Responsive mobile-first design

Avoid:

* Excessive gradients
* Excessive glow
* Excessive glassmorphism
* Huge rounded containers everywhere
* Overly futuristic UI
* Generic AI-generated landing page appearance
* Excessive animations
* Excessive decorative elements

The website should feel like a real Indonesian travel business, not an AI demo.

---

## 16. Responsive Design

Must work well on:

* Mobile
* Tablet
* Laptop
* Desktop

Mobile experience is especially important because WhatsApp is the primary conversion channel.

Navigation should be simple on mobile.

Buttons should be easy to tap.

Images must be optimized.

---

## 17. Technology

Current stack:

* Next.js
* App Router
* TypeScript
* Tailwind CSS
* shadcn/ui where useful
* Sanity CMS later
* Vercel deployment
* GitHub repository
* WhatsApp integration
* Google Maps later
* Google Analytics later

Do not add dependencies unless they provide clear value.

---

## 18. Component Architecture

Prefer reusable components.

Suggested structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
├── lib/
└── types/
```

Keep business configuration centralized where practical.

Avoid duplicating the same business information throughout components.

---

## 19. Content Rules

IMPORTANT:

Never invent business facts.

If information is missing:

* Use a clear placeholder.
* Mark it as TODO.
* Ask the developer/business owner for the real information.

Never fabricate:

* Reviews
* Prices
* Fleet
* Packages
* Promotions
* Company history
* Certifications
* Awards
* Customer numbers
* Operating hours
* Addresses
* Social media accounts

---

## 20. Assets

The real CHIKI TRAVEL logo and photographs will be provided later.

Until then:

* Use neutral placeholders where necessary.
* Clearly structure the code so real assets can easily replace placeholders.
* Never present placeholder imagery as actual CHIKI TRAVEL vehicles/customers.

---

## 21. SEO

The website should eventually include:

* Proper page titles
* Meta descriptions
* Open Graph metadata
* Semantic HTML
* Descriptive image alt text
* Clean URLs
* Sitemap
* Robots configuration
* Local SEO considerations

Do not invent business addresses or geographic claims.

---

## 22. Performance

Prioritize:

* Next.js Image optimization
* Minimal JavaScript
* Good Core Web Vitals
* Lazy loading where appropriate
* Avoid unnecessary dependencies
* Avoid unnecessary client components
* Keep server components where possible

---

## 23. Accessibility

Use:

* Semantic HTML
* Proper heading hierarchy
* Keyboard-accessible controls
* Visible focus states
* Accessible buttons/links
* Appropriate contrast
* Meaningful alt text

---

## 24. Development Phases

### Phase 1 — Foundation

* Next.js setup
* Global layout
* Header
* Footer
* Design system
* Homepage
* Routes
* Services
* Rental
* Destinations
* WhatsApp CTA
* Responsive design

### Phase 2 — CMS & Business Content

* Sanity integration
* Routes CMS
* Packages CMS
* Vehicles CMS
* Destinations CMS
* Promotions
* Gallery
* Testimonials
* FAQ
* Contact
* Google Maps
* Google Analytics

### Phase 3 — Optimization

* Blog
* Advanced filtering
* SEO improvements
* Performance optimization
* Accessibility improvements
* UX refinement
* Conversion optimization

---

## 25. Development Rules

Before implementing a feature:

1. Inspect existing code.
2. Reuse existing components where possible.
3. Follow the established design system.
4. Do not unnecessarily rewrite working code.
5. Do not introduce unnecessary dependencies.
6. Do not invent business information.
7. Keep components maintainable.
8. Test desktop and mobile.
9. Run lint/build after significant changes.
10. Document unfinished areas as TODOs.

When unsure about business information, stop and ask rather than inventing it.

---

## 26. Definition of Done

A feature is considered complete when:

* It works on desktop and mobile.
* It follows the established design system.
* It has no obvious console errors.
* Links and buttons work.
* WhatsApp CTAs point to the correct number.
* No fake business information is presented.
* Existing functionality is not broken.
* Code is reasonably maintainable.
* Lint/build succeeds where applicable.

---

## 27. Current TODO

* [ ] Finalize visual design
* [x] Add real CHIKI TRAVEL logo
* [x] Add real photography
* [x] Build polished homepage
* [ ] Build route pages
* [ ] Build package pages
* [ ] Build rental pages
* [ ] Build destination pages
* [ ] Integrate Sanity
* [ ] Add real business content
* [ ] Add Google Maps
* [ ] Add Google Analytics
* [ ] Configure SEO
* [ ] Connect GitHub
* [ ] Deploy to Vercel
* [ ] Final mobile/desktop QA
* [ ] Final client review
