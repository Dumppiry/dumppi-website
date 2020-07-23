import React, { useState, useEffect, useRef } from "react";
import Progress from "part:@sanity/components/progress/circle";

import styles from "./ActionsList.css";

import ActionItem from "./ActionItem";

import request from "../utils/request";
import { fetchSecrets } from "../utils/secrets";

const ActionsList = ({ repo }) => {
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchSecrets().then((secrets) => {
      request({
        url: `/repos/${repo.owner}/${repo.name}/actions/workflows`,
        headers: { Authorization: `Bearer ${secrets.accessToken}` },
      })
        .then((response) => {
          if (response.body.workflows) {
            setActions(response.body.workflows ?? []);
          } else {
            setError(response.body.message);
          }
          setLoading(false);
        })
        .catch((error) => console.error(error));
    });
  }, []);

  if (loading) return <Progress />;
  if (error) return <h4>{error}</h4>;

  return (
    <ul className={styles.actions}>
      {actions.length > 0 &&
        actions.map((action) => <ActionItem action={action} repo={repo} />)}
    </ul>
  );
};

export default ActionsList;
