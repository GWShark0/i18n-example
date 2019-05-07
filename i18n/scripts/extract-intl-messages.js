const extractReactIntlMessages = require('extract-react-intl-messages');
const locales = require('../locales');

const pattern = 'src/**/*.js';
const buildDir = 'i18n/messages';
const defaultLocale = 'en-US';

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale });
