function getLanguage(locale) {
  const [language] = locale.split('-');
  return language;
}

module.exports = getLanguage;
