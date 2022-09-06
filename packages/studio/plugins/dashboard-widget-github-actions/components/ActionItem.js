import React, { useState } from "react";
import Button from "part:@sanity/components/buttons/default";
import Snackbar from "part:@sanity/components/snackbar/default";

import styles from "./ActionItem.css";

import request from "../utils/request";
import { fetchSecrets } from "../utils/secrets";

const ActionItem = ({ title, repo, eventType, workflowName }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const triggerAction = () => {
    setLoading(true);
    fetchSecrets().then((secrets) => {
      request({
        url: `/repos/${repo.owner}/${repo.name}/dispatches`,
        body: JSON.stringify({
          event_type: eventType,
        }),
        headers: { Authorization: `Bearer ${secrets.accessToken}` },
      })
        .then((response) => {
          setLoading(false);

          response.statusCode === 204
            ? setSuccess(true)
            : setError(response.statusMessage);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    });
  };

  const renderErrorSnackbar = () => (
    <Snackbar
      kind="error"
      title="An error occured"
      subtitle={error}
      children={<>Please try again.</>}
      onClose={() => setError(null)}
    />
  );

  const renderSuccessSnackbar = () => (
    <Snackbar
      kind="success"
      title="Action triggered"
      children={<>Click the name of the action to see its progress</>}
      onClose={() => setSuccess(false)}
    />
  );

  return (
    <>
      {error && renderErrorSnackbar()}
      {success && renderSuccessSnackbar()}
      <li className={styles.item}>
        <div>
          <h4>{title}</h4>
          <a
            href={`https://github.com/${repo.owner}/${repo.name}/actions?query=workflow%3A"${workflowName}"`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={`https://github.com/Dumppiry/dumppi-website/workflows/${workflowName}/badge.svg`}
              alt={workflowName}
            />
          </a>
        </div>
        <Button inverted loading={loading} onClick={triggerAction}>
          Deploy
        </Button>
      </li>
    </>
  );
};

export default ActionItem;
