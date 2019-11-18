import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      Navbar
      <Link to='/'>Home</Link>
      <Link to='/Portfolio'>Portfolio</Link>
      <Link to='/About'>About</Link>
    </div>
  );
}

export default Navbar;