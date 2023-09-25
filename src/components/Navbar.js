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
          <div 
            className='navbar-logo-container' 
            onClick={closeMobileMenu} 
            style={{ textAlign: 'center' }}
          >
            <Link 
              to='/' 
              className='navbar-logo' 
              style={{ fontFamily: 'Futura, sans-serif', display: 'inline-block' }}
            >
              Policy Pulse Institute
            </Link>
            <div 
              className='navbar-motto' 
              style={{ 
                fontFamily: 'Garamond, serif', 
                color: '#A4D9FF', // Changed color to '#A4D9FF'
                fontSize: 'smaller', 
                fontStyle: 'italic' // Set font style to italic
              }}
            >
              Primum Non Desipere
            </div>
          </div>
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
