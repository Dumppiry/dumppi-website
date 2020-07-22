import React, { useState, useEffect, useRef } from "react";
import Button from "part:@sanity/components/buttons/default";

import styles from "./ActionItem.css";

import request from "../utils/request";

const ActionItem = ({ action, repo }) => {
  const { name, badge_url } = action;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerAction = () => {
    setLoading(true);
    request({
      url: `/repos/${repo.owner}/${repo.name}/dispatches`,
      body: JSON.stringify({
        event_type: "start-build-and-deploy",
      }),
    })
      .then((response) => {
        console.log("Done");
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  return (
    <li className={styles.item}>
      <div>
        <a
          href={`https://github.com/${repo.owner}/${repo.name}/actions?query=workflow%3A"${name}"`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={badge_url} alt={name} />
        </a>
      </div>
      <Button inverted loading={loading} onClick={triggerAction}>
        Deploy
      </Button>
    </li>
  );
};

export default ActionItem;
