import { useState } from 'react'
import { Octokit } from '@octokit/core'
import { useSecrets, SettingsView } from '@sanity/studio-secrets'
import { useClient, useCurrentUser } from 'sanity'
import { Button, Inline } from '@sanity/ui'

const SiteDeploy = ({
  user,
  repo,
  siteName,
  namespace,
  eventType,
  adminRole = 'administrator'
}) => {
  const { secrets } = useSecrets(namespace)
  const [showSettings, setShowSettings] = useState(false)
  const [message, setMessage] = useState()
  const client = useClient({ apiVersion: '2023-11-16' })
  const currentUser = useCurrentUser()

  const pluginConfigKeys = [
    {
      key: 'apiToken',
      title: `Github token for ${siteName}`
    }
  ]

  const deleteKey = async () => {
    await client.delete({
      query: `*[_type == "pluginSecrets" && _id == "secrets.${namespace}"]`
    })
  }

  const findRole = (role) => {
    return currentUser.roles.find((r) => r.name === role)
  }

  const triggerGitHubActions = async () => {
    try {
      const octokit = new Octokit({ auth: secrets.apiToken })
      const response = await octokit.request(
        `POST /repos/${user}/${repo}/dispatches`,
        {
          data: JSON.stringify({
            event_type: eventType
          })
        }
      )

      if (response.status === 204) {
        setMessage('GitHub Actions triggered successfully')
        setTimeout(() => {
          setMessage()
        }, 6000)
      } else {
        setMessage('Failed to trigger GitHub Actions')
        setTimeout(() => {
          setMessage()
        }, 6000)
      }
    } catch (error) {
      console.error(error)
      setMessage('Failed to trigger GitHub Actions')
      setTimeout(() => {
        setMessage()
      }, 6000)
    }
  }

  const baseBtnStyle = {
    width: '8em',
    textAlign: 'center'
  }

  return (
    <div>
      <Inline space={[2]}>
        <h3 style={{ marginRight: '1em' }}>{siteName}</h3>
        {showSettings === true ? (
          <SettingsView
            title={'Github token'}
            namespace={namespace}
            keys={pluginConfigKeys}
            onClose={() => {
              setShowSettings(false)
            }}
          />
        ) : null}
        <Button
          tone='positive'
          onClick={triggerGitHubActions}
          text={<div style={baseBtnStyle}>Deploy!</div>}
        />
        {findRole(adminRole) ? (
          <Inline space={[2]}>
            <Button
              tone={!secrets ? 'caution' : 'default'}
              mode='ghost'
              onClick={() => setShowSettings(true)}
              text={
                <div style={baseBtnStyle}>
                  {secrets ? 'Change API key' : 'Add API key'}
                </div>
              }
            />
            <Button
              tone='critical'
              mode='bleed'
              onClick={deleteKey}
              text={<div style={baseBtnStyle}>Delete token</div>}
            />
          </Inline>
        ) : null}
        {message ?? <h2>{message}</h2>}
      </Inline>
    </div>
  )
}

export default SiteDeploy
