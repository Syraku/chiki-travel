import { sanityClient } from "./client";
import { fleetQuery, routesQuery, siteSettingsQuery } from "./queries";
import { fleetList, siteConfig } from "@/config/site";

export async function getSiteSettings() {
  try {
    return (await sanityClient.fetch(siteSettingsQuery)) || null;
  } catch {
    return null;
  }
}

export async function getRoutes() {
  try {
    const data = await sanityClient.fetch(routesQuery);
    return Array.isArray(data) && data.length > 0 ? data : siteConfig.routes.flatMap((route) =>
      route.destinations.map((destination) => ({
        origin: route.origin,
        destination,
      }))
    );
  } catch {
    return siteConfig.routes.flatMap((route) =>
      route.destinations.map((destination) => ({ origin: route.origin, destination }))
    );
  }
}

export async function getFleet() {
  try {
    const data = await sanityClient.fetch(fleetQuery);
    return Array.isArray(data) && data.length > 0 ? data : fleetList;
  } catch {
    return fleetList;
  }
}
