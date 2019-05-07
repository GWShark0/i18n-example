import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import locales from '../i18n/locales';
import getLanguage from '../i18n/scripts/getLanguage';
import './index.scss';
import App from './App';

locales.forEach(locale => {
  const language = getLanguage(locale);
  addLocaleData(require(`react-intl/locale-data/${language}`));
})

const { locale, messages } = window.appData;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
