require('dotenv').config();
const fs = require('fs-extra');
const Promise = require('bluebird');
const { Translate } = require('@google-cloud/translate');
const capitalize = require('lodash/capitalize');
const source = require('../messages/en-US.json');

const { GOOGLE_PROJECT_ID, GOOGLE_PRIVATE_KEY } = process.env;

const translate = new Translate({
  projectId: GOOGLE_PROJECT_ID,
  key: GOOGLE_PRIVATE_KEY,
});

const LOCALES = ['es-ES', 'fr-FR'];

async function main() {
  const keys = Object.keys(source);
  Promise.each(LOCALES, async (locale) => {
    const [language] = locale.split('-');
    const output = await Promise.reduce(keys, async (result, key) => {
      const value = source[key];
      const [translated] = await translate.translate(value, language);
      result[key] = capitalize(translated);
      return result;
    }, {});

    fs.outputJson(`./messages/${locale}.json`, output, { spaces: 2 });
  })
}

main();
