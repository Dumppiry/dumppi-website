import S from "@sanity/desk-tool/structure-builder";
import { FiSettings, FiAlignRight } from "react-icons/fi";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(
          S.editor()
            .schemaType("settings")
            .documentId("settings")
        ),
      S.listItem()
        .title("Event Settings")
        .icon(FiSettings)
        .child(
          S.editor()
            .schemaType("eventSettings")
            .documentId("eventSettings")
        ),
      S.listItem()
        .title("Main Navigation")
        .icon(FiAlignRight)
        .child(
          S.editor()
            .schemaType("mainNavigation")
            .documentId("mainNavigation")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          !["settings", "eventSettings", "mainNavigation"].includes(
            listItem.getId()
          )
      )
    ]);
