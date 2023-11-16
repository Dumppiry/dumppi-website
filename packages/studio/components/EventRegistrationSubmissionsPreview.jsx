import React, { useEffect, useState } from "react";
import { useClient } from "sanity";
import { useTable } from "react-table";

// This the simplest example found on the interwebs
const Table = ({ data, columns }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table style={{ borderCollapse: "collapse" }} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                style={{ border: "1px solid black", padding: "1rem" }}
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr style={{ height: "10rem" }} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "1rem",
                      verticalAlign: "top",
                      maxHeight: "20rem",
                    }}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const EventRegistrationSubmissionsPreview = ({ document }) => {
  const { registrationForm, registrationSubmissions } = document.displayed;
  const [columns, setColumns] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const client = useClient();
  useEffect(() => {
    const query = `
      {
        'fields': *[_id == $formId][0].fields,
        'defaultFields': *[_type == 'eventSettings'][0].registrationDefaultFields[].field
      }
    `;
    const params = {
      formId: registrationForm?._ref,
    };

    client.fetch(query, params).then(({ defaultFields, fields }) => {
      const columns = [...defaultFields, ...fields].map((field, index) => ({
        key: index,
        title: field.label.fi,
        dataIndex: field.fieldId.current,
        ellipsis: true,
      }));
      setColumns(columns);
      const subs = registrationSubmissions.map((s, index) => ({
        key: index,
        ...JSON.parse(s),
      }));
      setSubmissions(subs);
    });
  }, [registrationSubmissions]);
  const headers = columns.map((c) => ({
    Header: c.title,
    accessor: c.dataIndex,
  }));
  return submissions &&
    submissions.length > 0 &&
    columns &&
    columns.length > 0 ? (
    <Table data={submissions} columns={headers} />
  ) : (
    <p>wait</p>
  );
};

export default EventRegistrationSubmissionsPreview;
