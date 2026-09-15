import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "chiki-travel",
  title: "CHIKI TRAVEL CMS",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "y90hp7sc",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
