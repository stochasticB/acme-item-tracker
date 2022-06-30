import React from 'react';

const Nav = ({ users, things, view })=> {
  return (
    <nav>
      <a href='#' className={ view === '' ? 'selected': ''}>Home</a>
      <a href='#things' className={ view === 'things' ? 'selected': ''}>Things ({ things.length })</a>
      <a href='#users' className={ view === 'users' ? 'selected': ''}>Users ({ users.length })</a>
    </nav>
  );
};

export default Nav;
