import React from "react";

import styles from "./ActionsList.css";

import ActionItem from "./ActionItem";

const ActionsList = ({ repo, actions = [] }) => {
  return (
    <ul className={styles.actions}>
      {actions.length <= 0 ? (
        <>
          <h4>No actions</h4>
          <p>
            Add actions to this plugin in your <code>dashboardConfig.js</code>{" "}
            file.
          </p>
        </>
      ) : (
        actions.map((action) => (
          <ActionItem
            repo={repo}
            title={action.title}
            eventType={action.eventType}
            workflowName={action.workflowName}
          />
        ))
      )}
    </ul>
  );
};

export default ActionsList;
