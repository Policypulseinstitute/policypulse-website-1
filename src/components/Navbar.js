import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
            to='/' 
            className='navbar-logo' 
            onClick={closeMobileMenu} 
            style={{ fontFamily: 'Futura, sans-serif' }}
            >
            POLICY PULSE INSTITUTE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>          
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{ fontFamily: 'Futura, sans-serif' }}
              >
                Our Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{ fontFamily: 'Futura, sans-serif' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
