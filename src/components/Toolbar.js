import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
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
      <Search />
    </nav>
  );
}

export default Toolbar;
