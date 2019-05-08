const express = require('express');
const { readFileSync } = require('fs-extra');
const glob = require('glob');
const helmet = require('helmet');
const { basename, resolve } = require('path');

const app = express();

// add security-related headers to response
app.use(helmet());

// add templating engine
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, './views'));

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

// index route
app.get('/', (req, res) => {
  const { locale = 'en-US' } = req.query;
  const messages = translations[locale];

  if (!messages) {
    return res.status(404).send('Locale is not supported.');
  }

  res.render('index', { locale, messages });
});

module.exports = app
