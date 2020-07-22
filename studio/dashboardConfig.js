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
  ],
};
