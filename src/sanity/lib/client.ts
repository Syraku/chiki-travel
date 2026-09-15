import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "y90hp7sc",
  dataset: "production",
  apiVersion: "2026-09-15",
  useCdn: true,
});
