export default {
  widgets: [
    {
      name: "sanity-tutorials"
    },
    {
      name: "project-info",
      __experimental_before: [
        {
          name: "netlify",
          options: {
            description:
              "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
            sites: [
              {
                buildHookId: "",
                title: "Website",
                name: "dumppi-website",
                apiId: ""
              }
            ]
          }
        }
      ],
      data: [
        {
          title: "GitHub repo",
          value: "https://github.com/papivaan/dumppi-website/",
          category: "Code"
        },
        {
          title: "Frontend",
          value: "https://www.dumppi.fi",
          category: "apps"
        }
      ]
    },
    {
      name: "project-users"
    }
  ]
};
