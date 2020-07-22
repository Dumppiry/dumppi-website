import React, { useState } from "react";
import Button from "part:@sanity/components/buttons/default";
import Snackbar from "part:@sanity/components/snackbar/default";

import styles from "./ActionItem.css";

import request from "../utils/request";

const ActionItem = ({ action, repo }) => {
  const { name, badge_url } = action;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const triggerAction = () => {
    setLoading(true);
    request({
      url: `/repos/${repo.owner}/${repo.name}/dispatches`,
      body: JSON.stringify({
        event_type: "start-build-and-deploy",
      }),
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
    </>
  );
};

export default ActionItem;
