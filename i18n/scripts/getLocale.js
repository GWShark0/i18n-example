const locales = require('../locales');

function getLocale(country) {
  return locales.find(locale => locale.includes(country));
}

module.exports = getLocale;
