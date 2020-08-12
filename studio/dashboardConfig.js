export default {
  widgets: [
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
  ],
};
