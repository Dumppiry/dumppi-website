import S from "@sanity/desk-tool/structure-builder";
import { FiSettings } from "react-icons/fi";

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
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem => !["settings", "eventSettings"].includes(listItem.getId())
      )
    ]);
