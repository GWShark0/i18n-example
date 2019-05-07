import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import LanguageSelect from './LanguageSelect';
import Search from './Search';

import './Toolbar.scss';

const messages = defineMessages({
  title: 'Hello world',
});

function Toolbar() {
  return (
    <nav className="toolbar">
      <h1 className="toolbar__title">
        <FormattedMessage {...messages.title} />
      </h1>
      <div className="toolbar__content">
        <Search />
        <LanguageSelect />
      </div>
    </nav>
  );
}

export default Toolbar;
