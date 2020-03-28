import React, { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import { Table, Pagination } from "antd";

const EventRegistrationSubmissionsPreview = ({ document }) => {
  const { registrationForm, registrationSubmissions } = document.displayed;
  const [columns, setColumns] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    client.getDocument(registrationForm?._ref).then(form => {
      const columns = form?.fields.map((field, index) => ({
        key: index,
        title: field.label.fi,
        dataIndex: field.label.fi
      }));
      setColumns(columns);
      const subs = registrationSubmissions.map(JSON.parse);
      setSubmissions(subs);
    });
  }, [registrationSubmissions]);

  return <Table dataSource={submissions} columns={columns} />;
};

export default EventRegistrationSubmissionsPreview;
