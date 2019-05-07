const extractReactIntlMessages = require('extract-react-intl-messages');

const locales = ['en', 'fr'];
const pattern = 'src/**/*.js';
const buildDir = 'messages';
const defaultLocale = 'en';

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale });
