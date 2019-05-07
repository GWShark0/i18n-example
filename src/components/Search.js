import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

import './Search.scss';

const messages = defineMessages({
  placeholder: 'Search here',
});

function Search() {
  return (
    <div className="search">
      <FormattedMessage {...messages.placeholder}>
        {(placeholder) => (
          <input
            className="search__input"
            type="text"
            placeholder={placeholder}
          />
        )}
      </FormattedMessage>
    </div>
  );
}

export default Search;
