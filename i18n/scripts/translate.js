require('dotenv').config();
const fs = require('fs-extra');
const Promise = require('bluebird');
const { Translate } = require('@google-cloud/translate');
const capitalize = require('lodash/capitalize');
const getLanguage = require('./getLanguage');
const locales = require('../locales');
const source = require('../messages/en-US.json');

const { GOOGLE_PROJECT_ID, GOOGLE_PRIVATE_KEY } = process.env;

const translate = new Translate({
  projectId: GOOGLE_PROJECT_ID,
  key: GOOGLE_PRIVATE_KEY,
});

async function main() {
  const keys = Object.keys(source);
  Promise.each(locales, async (locale) => {
    const language = getLanguage(locale);
    const output = await Promise.reduce(keys, async (result, key) => {
      const value = source[key];
      const [translated] = await translate.translate(value, language);
      result[key] = capitalize(translated);
      return result;
    }, {});

    fs.outputJson(`./i18n/messages/${locale}.json`, output, { spaces: 2 });
  })
}

main();
