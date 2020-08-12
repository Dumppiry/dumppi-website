# dumppi-website

![Build and Deploy to Netlify](https://github.com/Dumppiry/dumppi-website/workflows/Build%20and%20Deploy%20to%20Netlify/badge.svg)

## Quick start

1. Clone this repository
2. `yarn` in the studio and web folders
3. `yarn dev` in the studio folder to start the studio locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
4. `yarn develop` in the web folder to start the frontend locally
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)

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
