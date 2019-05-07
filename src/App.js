import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import SidebarItem from './components/SidebarItem';
import Toolbar from './components/Toolbar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Sidebar>
        <SidebarItem id="apple" />
        <SidebarItem id="kiwi" />
        <SidebarItem id="lemon" />
        <SidebarItem id="orange" />
        <SidebarItem id="pear" />
        <SidebarItem id="strawberry" />
        <SidebarItem id="watermelon" />
      </Sidebar>
      <Main />
    </div>
  );
}

export default App;
