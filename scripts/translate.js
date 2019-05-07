require('dotenv').config();
const fs = require('fs-extra');
const Promise = require('bluebird');
const { Translate } = require('@google-cloud/translate');
const upperFirst = require('lodash/upperFirst');
const source = require('../messages/en-US.json');

const { GOOGLE_PROJECT_ID, GOOGLE_PRIVATE_KEY } = process.env;

const translate = new Translate({
  projectId: GOOGLE_PROJECT_ID,
  key: GOOGLE_PRIVATE_KEY,
});

async function main() {
  const keys = Object.keys(source);
  const output = await Promise.reduce(keys, async (result, key) => {
    const value = source[key];
    const [translated] = await translate.translate(value, 'fr');
    result[key] = upperFirst(translated);
    return result;
  }, {});
  fs.outputJson('./messages/fr-FR.json', output, { spaces: 2 });
}

main();
