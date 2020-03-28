import defaultResolve from "part:@sanity/base/document-actions";

import { DownloadAttendeesAction } from "./actions/DownloadAttendeesAction";

export default function resolveDocumentActions(props) {
  const eventActions = props.type === "event" ? [DownloadAttendeesAction] : [];

  return [...defaultResolve(props), ...eventActions];
}
