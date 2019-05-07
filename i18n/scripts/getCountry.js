function getCountry(locale) {
  const [, country] = locale.split('-');
  return country;
}

module.exports = getCountry;
