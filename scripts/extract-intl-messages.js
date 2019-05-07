const extractReactIntlMessages = require('extract-react-intl-messages');

const locales = ['en-US', 'fr-FR'];
const pattern = 'src/**/*.js';
const buildDir = 'messages';
const defaultLocale = 'en-US';

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale });
