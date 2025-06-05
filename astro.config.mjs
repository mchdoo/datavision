// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      // useCdn: false,
      projectId: "5nckbb5c",
      dataset: "production",
      studioBasePath: "/admin",
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
});
