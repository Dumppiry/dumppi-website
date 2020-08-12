import React, { useEffect, useState } from "react";

import Button from "part:@sanity/components/buttons/default";
import AnchorButton from "part:@sanity/components/buttons/anchor";
import TextInput from "part:@sanity/components/textinputs/default";

import styles from "./Widget.css";
import ActionsList from "./components/ActionsList";

import { fetchSecrets, saveSecrets } from "./utils/secrets";

const Widget = (props) => {
  const { title, repo, actions } = props;
  const [secrets, setSecrets] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    fetchSecrets().then((secrets) => {
      setSecrets(secrets);
    });
  }, []);

  const saveSecret = () => {
    saveSecrets(token).then((secrets) => setSecrets(secrets));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <div className={styles.content}>
        {secrets?.accessToken ? (
          <ActionsList repo={repo} actions={actions} />
        ) : (
          <div>
            <p>Needs setup</p>
            <TextInput
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button inverted kind="simple" onClick={saveSecret}>
              Save secret
            </Button>
          </div>
        )}
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
