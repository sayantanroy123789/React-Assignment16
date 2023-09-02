import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div id='nav'>
        <Link to='/'>HOME</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/service'>SERVICE</Link>
    </div>
  )
}

export default Header