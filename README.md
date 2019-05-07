# Example i18n App

## Install

Create an environment file:
```
cp dev.env .env
```
Ensure the correct version of Node is installed:
```
nvm install
```
Install dependencies:
```
npm install
```

## Run Demo

```
npm start
```

## Translate

Generate files for translation:
```
npm run i18n:generate
```

Translate generated files:
```
npm run i18n:translate
```
##### *Requires a Google API key (see `.env` file)

https://cloud.google.com/docs/authentication/api-keys

https://cloud.google.com/translate/docs

Run both commands:
```
npm run i18n
```
