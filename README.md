# Example i18n App

![app](https://user-images.githubusercontent.com/2968519/57331754-61147e00-70e7-11e9-9682-e11d2ef96565.png)

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
