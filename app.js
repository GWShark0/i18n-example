require('dotenv').config();
const { readFileSync } = require('fs-extra');
const { basename } = require('path');
const express = require('express');
const glob = require('glob');
const { PORT } = process.env;

const translations = glob.sync('./i18n/messages/*.json')
  .map((filename) => [
    basename(filename, '.json'),
    readFileSync(filename, 'utf8'),
  ])
  .map(([locale, file]) => [locale, JSON.parse(file)])
  .reduce((collection, [locale, messages]) => {
    collection[locale] = messages;
    return collection;
  }, {});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const { locale = 'en-US' } = req.query;
  const messages = translations[locale];

  if (!messages) {
    return res.status(404).send('Locale is not supported.');
  }

  res.render('index', { locale, messages });
});

app.use(express.static('dist'))

app.listen(PORT, () => console.log(`Example running: http://localhost:${PORT}`));
