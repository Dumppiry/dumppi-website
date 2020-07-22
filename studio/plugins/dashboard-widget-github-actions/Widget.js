import React, { useState } from "react";
import headers from "get-it/lib/middleware/headers";

import AnchorButton from "part:@sanity/components/buttons/anchor";

import styles from "./Widget.css";
import ActionsList from "./components/ActionsList";

import request from "./utils/request";

const Widget = (props) => {
  const { title, repo, github_token } = props;

  request.use(
    headers({
      Authorization: `Bearer ${github_token}`,
    })
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <div className={styles.content}>
        <ActionsList repo={repo} />
      </div>
      <div className={styles.footer}>
        <AnchorButton
          bleed
          color="primary"
          kind="simple"
          href={`https://github.com/${repo.owner}/${repo.name}/actions`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Manage actions in GitHub
        </AnchorButton>
      </div>
    </div>
  );
};

export default Widget;
