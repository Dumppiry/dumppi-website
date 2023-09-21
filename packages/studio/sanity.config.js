import { defineConfig } from "sanity"
import schemas from "./schemas/schema"
import { deskTool } from "sanity/desk"
import { colorInput } from "@sanity/color-input"
import {
  dashboardTool,
  projectInfoWidget,
} from "@sanity/dashboard"
import { catsWidget } from "sanity-plugin-dashboard-widget-cats"
import deskStructure from "./deskStructure"

export default defineConfig({
  title: "dumppi-website",
  projectId: "ubo8m1s0",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure
    }),
    colorInput(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        catsWidget({ layout: { width: "medium" } }),
      ]
    })
  ],
  schema: {
    types: schemas,
  },
})