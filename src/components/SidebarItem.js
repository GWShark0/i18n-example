import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';

import './SidebarItem.scss';

const messages = defineMessages({
  apple: 'Apple',
  kiwi: 'Kiwi',
  lemon: 'Lemon',
  orange: 'Orange',
  pear: 'Pear',
  strawberry: 'Strawberry',
  watermelon: 'Watermelon',
});

const getFruit = (id) => {
  switch (id) {
    case 'apple':
      return '🍎';
    case 'kiwi':
      return '🥝';
    case 'lemon':
      return '🍋';
    case 'orange':
      return '🍊';
    case 'pear':
      return '🍐';
    case 'strawberry':
      return '🍓';
    case 'watermelon':
      return '🍉';
    default:
      return '❔';
  }
}

function SidebarItem(props) {
  const { id } = props;
  return (
    <div className="sidebar-item">
      {getFruit(id)}
      {' '}
      <FormattedMessage {...messages[id]} />
    </div>
  );
}

SidebarItem.propTypes = {
  id: PropTypes.string,
};

export default SidebarItem;
