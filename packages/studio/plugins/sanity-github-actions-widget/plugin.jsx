import GitHubActionsWidget from './GithubActionsWidget'

export const githubActionsWidget = (config) => {
  return {
    name: 'github-actions-widget',
    component: function component() {
      return <GitHubActionsWidget {...config} />
    },
    layout: config.layout
  }
}
