import S from "@sanity/desk-tool/structure-builder";
import {
  FiSettings,
  FiAlignRight,
  FiFileText,
  FiCalendar,
  FiGift
} from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";

import EventSubmissionsPreview from "./components/EventRegistrationSubmissionsPreview";

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
      S.listItem()
        .title("Full Navigation")
        .icon(FiAlignRight)
        .child(
          S.editor()
            .schemaType("fullNavigation")
            .documentId("fullNavigation")
        ),
      S.divider(),
      S.listItem()
        .title("Front Page")
        .icon(FiFileText)
        .child(
          S.editor()
            .schemaType("frontPage")
            .documentId("frontPage")
        ),
      S.listItem()
        .title("Events Page")
        .icon(FiCalendar)
        .child(
          S.editor()
            .schemaType("eventsPage")
            .documentId("eventsPage")
        ),
      S.listItem()
        .title("Events")
        .icon(FiCalendar)
        .child(
          S.documentList()
            .schemaType("event")
            .title("Events")
            .filter('_type == "event"')
            .child(
              S.document().views([
                S.view.form(),
                S.view.component(EventSubmissionsPreview).title("Attendees")
              ])
            )
        ),
      S.listItem()
        .title("Partners")
        .icon(FaRegHandshake)
        .child(
          S.editor()
            .schemaType("partners")
            .documentId("partners")
        ),
      S.listItem()
        .title("Benefits page")
        .icon(FiGift)
        .child(
          S.editor()
            .schemaType("benefitsPage")
            .documentId("benefitsPage")
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            "settings",
            "eventSettings",
            "mainNavigation",
            "fullNavigation",
            "frontPage",
            "eventsPage",
            "event",
            "partners",
            "benefitsPage"
          ].includes(listItem.getId())
      )
    ]);
