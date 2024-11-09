# dumppi-website

Official website of Dumppi Ry.

## Requirements

- Node
- Yarn

### Node

Install node. Use Node 14. Easiest way to install specific Node version is to use [Node Version Manager](https://github.com/nvm-sh/nvm).

### Yarn

This project uses Yarn as a package manager. See Yarns [install guide](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable).

## Quick start

1. Clone this repository
2. `yarn` in the project root directory
3. `yarn dev` in the web folder to start the frontend locally
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)

## Environment variables for local development

In order for the local development environment to work, you need some environment variables. The variables should be added in `.env` file in the web folder.

You can duplicate the example file by running the following command in the web folder: `cp .env.example .env`

```bash
# Retrieve Sanity tokens from https://manage.sanity.io
SANITY_READ_TOKEN=your-token-here
SANITY_WRITE_TOKEN=your-token-here
```

### Retrieving Sanity tokens

1. Go to <https://manage.sanity.io> and login
2. Choose your project
3. Got to Settings –> API
4. Add new token
5. Give the token a descriptive name (e.g. Your Name Development Read Token)
6. Choose correct rights (read for read tokens etc.)
7. Click add token
8. Copy the token and paste it into a correct location. Note that you see the token only once! Don't close the dialog before you have stored it securely.

## Deploy manually

_Only when automatic deployments are not working or some other special case_

1. Install Netlify CLI and login

```bash
npm i -g netlify-cli
ntl login
```

Login as webmaster@dumppi.fi

2. Build and deploy website

```bash
yarn build
ntl deploy --prod
```

3. Build and deploy Sanity studio

```bash
yarn build
ntl deploy --prod
```

## Teams form submissions

To be able to retrieve notifications in Teams from contact forms etc. a GitHub Secret needs to be set. Go to ´Settings -> Secrets´ and create/edit a secret called `TEAMS_WEBHOOK_URL`. You can retrieve the webhook url from your Teams team settings within the app by pressing three dots next to a channel and choosing `Connectors`.

## Change authtoken

Sanity studio needs Github access token to be able to activate build action. This is stored in Sanitys database and can be changed from the Studio GUI.

Create a finegrained token in github settings -> developer settings -> Personal access tokens -> fine-grained tokens. Set expiration and give read & write permission for content to this repository.
