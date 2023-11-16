import { defineConfig } from "sanity";
import schemas from "./schemas/schema";
import { deskTool } from "sanity/desk";
import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import { catsWidget } from "sanity-plugin-dashboard-widget-cats";
import deskStructure from "./deskStructure";
import { DownloadAttendeesAction } from "./actions/DownloadAttendeesAction";

export default defineConfig({
  title: "dumppi-website",
  projectId: "ubo8m1s0",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        catsWidget({ layout: { width: "medium" } }),
      ],
    }),
  ],
  schema: {
    types: schemas,
  },
  document: {
    actions: (prev, { schemaType }) => {
      switch (schemaType) {
        case "event":
          return [...prev, DownloadAttendeesAction];
        default:
          return prev;
      }
    },
  },
});
