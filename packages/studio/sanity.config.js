import { defineConfig } from "sanity";
import schemas from "./schemas/schema";
import { deskTool } from "sanity/desk";
import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import { catsWidget } from "sanity-plugin-dashboard-widget-cats";
import deskStructure from "./deskStructure";
import { DownloadAttendeesAction } from "./actions/DownloadAttendeesAction";
import { githubActionsWidget } from "./plugins/sanity-github-actions-widget";

export default defineConfig({
  title: "dumppi-website",
  projectId: "ubo8m1s0",
  dataset: "production",
  plugins: [
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        githubActionsWidget({
          layout: {
            width: "small",
            height: "small",
          },
          sites: [
            {
              siteName: "dumppi.fi",
              githubUser: "Dumppiry",
              githubRepo: "dumppi-website",
              namespace: "dummpi-website",
              eventType: "build-and-deploy-web",
            },
          ],
        }),
        catsWidget({ layout: { width: "medium" } }),
      ],
    }),
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
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
