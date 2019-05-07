import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';

import './SidebarItem.scss';

export const messages = defineMessages({
  apple: '🍎 Apple',
  kiwi: '🥝 Kiwi',
  lemon: '🍋 Lemon',
  orange: '🍊 Orange',
  pear: '🍐 Pear',
  strawberry: '🍓 Strawberry',
  watermelon: '🍉 Watermelon',
});

function SidebarItem(props) {
  const { id } = props;
  return (
    <div className="sidebar-item">
      <FormattedMessage {...messages[id]} />
    </div>
  );
}

SidebarItem.propTypes = {
  id: PropTypes.string,
};

export default SidebarItem;
