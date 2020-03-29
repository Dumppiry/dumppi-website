import React, { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import { Table } from "antd";

const EventRegistrationSubmissionsPreview = ({ document }) => {
  const { registrationForm, registrationSubmissions } = document.displayed;
  const [columns, setColumns] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const query = `
      {
        'fields': *[_id == $formId][0].fields,
        'defaultFields': *[_type == 'eventSettings'][0].registrationDefaultFields[].field
      }
    `;
    const params = {
      formId: registrationForm?._ref
    };
    client.fetch(query, params).then(({ defaultFields, fields }) => {
      const columns = [...defaultFields, ...fields].map((field, index) => ({
        key: index,
        title: field.label.fi,
        dataIndex: field.fieldId.current,
        ellipsis: true
      }));
      setColumns(columns);
      const subs = registrationSubmissions.map((s, index) => ({
        key: index,
        ...JSON.parse(s)
      }));
      setSubmissions(subs);
    });
  }, [registrationSubmissions]);

  return <Table dataSource={submissions} columns={columns} />;
};

export default EventRegistrationSubmissionsPreview;
