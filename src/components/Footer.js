import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading' style={{ fontFamily: 'Futura, sans-serif' }}>
          Contact Us
        </p>
        <p className='footer-subscription-text'>
          contact@policypulse.institute
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo' style={{ fontFamily: 'Futura, sans-serif' }}>
              POLICY PULSE
            </Link>
          </div>
          <small class='website-rights' style={{ fontFamily: 'Futura, sans-serif' }}>POLICY PULSE © 2023 All rights reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
