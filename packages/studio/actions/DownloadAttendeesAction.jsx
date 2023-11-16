import React from "react";
import { CSVLink } from "react-csv";
import { FiDownload } from "react-icons/fi";

export function DownloadAttendeesAction(props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { registrationSubmissions, startDate, slug } = props.published || {};

  return {
    label: "Download attendees",
    icon: FiDownload,
    onHandle: () => {
      setDialogOpen(true);
    },
    disabled: !registrationSubmissions || !startDate || !slug?.fi?.current,
    dialog: dialogOpen && {
      type: "popover",
      onClose: () => setDialogOpen(false),
      content: (
        <CSVLink
          data={registrationSubmissions?.map(JSON.parse) ?? []}
          filename={`${startDate}-${slug.fi.current}.csv`}
          target="_blank"
        >
          Download as CSV
        </CSVLink>
      ),
    },
  };
}
