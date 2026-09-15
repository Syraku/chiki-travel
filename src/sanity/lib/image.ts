import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
