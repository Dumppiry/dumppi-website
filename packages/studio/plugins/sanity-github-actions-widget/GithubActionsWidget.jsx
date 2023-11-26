import React from 'react'
import { DashboardWidgetContainer } from '@sanity/dashboard'
import SiteDeploy from './SiteDeploy'
//import Button from '@sanity/ui/Button'

const defaultProps = {}

/*
 * Generate finegrained token in github settings -> developer settings ->
 * Personal access tokens -> fine-grained tokens. Set expiration and give
 * read & write permission for content.
 * (Or use classic token set to not expire)
 */
const GitHubActionsWidget = (props) => {
  const { sites } = { ...defaultProps, ...props }
  if (!sites)
    throw new Error(
      'GithubActionsWidget requires sites prop with one or more sites'
    )
  if (
    !sites[0].githubUser ||
    !sites[0].githubRepo ||
    !sites[0].siteName ||
    !sites[0].namespace ||
    !sites[0].eventType
  )
    throw new Error('GithubActionsWidget is missing required props')
  return (
    <div style={{ margin: '1em' }}>
      <h2>Deploy your sites!</h2>
      {sites.map((site) => {
        return (
          <SiteDeploy
            key={site.namespace}
            user={site.githubUser}
            repo={site.githubRepo}
            siteName={site.siteName}
            namespace={site.namespace}
            eventType={site.eventType}
          />
        )
      })}
    </div>
  )
}

export default GitHubActionsWidget
