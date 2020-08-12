# dumppi-website

![Build and Deploy to Netlify](https://github.com/Dumppiry/dumppi-website/workflows/Build%20and%20Deploy%20to%20Netlify/badge.svg)

## Quick start

1. Clone this repository
2. `yarn` in the studio and web folders
3. `yarn dev` in the studio folder to start the studio locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
4. `yarn develop` in the web folder to start the frontend locally
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
cd web
yarn build
ntl deploy --prod
```

3. Build and deploy Sanity studio

```bash
cd studio
yarn build
ntl deploy --prod
```
