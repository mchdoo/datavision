// sanity.config.ts
import { defineConfig } from "sanity";
import { schemaTypes } from "studio-datavision-insights/schemaTypes";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "datavision-insights",
  title: "Datavision Insights",
  projectId: "5nckbb5c",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
