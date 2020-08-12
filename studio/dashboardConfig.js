export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        data: [
          {
            title: "Website",
            value: "https://dumppi.fi",
            category: "apps",
          },
          {
            title: "GitHub",
            value: "https://github.com/dumppiry/dumppi-website",
            category: "Code",
          },
        ],
      },
    },
    {
      name: "github-actions",
      options: {
        title: "My GitHub Actions",
        repo: {
          owner: "Dumppiry",
          name: "dumppi-website",
        },
        actions: [
          {
            title: "dumppi.fi website",
            workflowName: "Build and Deploy Website to Netlify",
            eventType: "build-and-deploy-web",
          },
        ],
      },
    },
    { name: "minesweeper", layout: { width: "medium" } },
    { name: "cats", layout: { width: "medium" } },
  ],
};
