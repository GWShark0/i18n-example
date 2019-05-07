import React from 'react';
import Search from './Search';

import './Toolbar.scss';

function Toolbar() {
  return (
    <nav className="toolbar">
      <Search />
    </nav>
  );
}

export default Toolbar;
