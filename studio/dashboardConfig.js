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
        github_token: process.env.SANITY_STUDIO_GH_TOKEN,
      },
    },
    {
      name: "netlify",
      options: {
        title: "Netlify deploys",
        sites: [
          {
            title: "dumppi.fi",
            apiId: "7e2f1f4a-d981-44b3-a4e2-09ed0f606b3e",
            buildHookId: "5e8b837280d09101aecf89dd",
            name: "confident-heisenberg-a5b89e",
          },
        ],
      },
    },
  ],
};
