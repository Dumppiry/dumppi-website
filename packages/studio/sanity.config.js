import { defineConfig } from "sanity";
import schemas from "./schemas/schema";
import { deskTool } from "sanity/desk";
import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import deskStructure from "./deskStructure";
import { DownloadAttendeesAction } from "./actions/DownloadAttendeesAction";
import { catsWidget } from "sanity-plugin-dashboard-widget-cats";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { githubActionsWidget } from "./plugins/sanity-github-actions-widget";

export default defineConfig({
  title: "dumppi-website",
  projectId: "ubo8m1s0",
  dataset: "production",
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          layout: {
            width: "medium",
            height: "small",
          },
          title: "Events",
          createButtonText: "Create event",
          types: ["event"],
          showCreateButton: true,

          query: `*[_type == "event" && startDate > now()] | order(startDate asc)`,
        }),
        githubActionsWidget({
          layout: {
            width: "medium",
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
        projectInfoWidget(),
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
