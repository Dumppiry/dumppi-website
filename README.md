# dumppi-website

![Build and Deploy to Netlify](https://github.com/Dumppiry/dumppi-website/workflows/Build%20and%20Deploy%20to%20Netlify/badge.svg)

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
