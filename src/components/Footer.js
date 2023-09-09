import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Us
        </p>
        <p className='footer-subscription-text'>
          hello@policypulseglobal.com
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              POLICY PULSE
            </Link>
          </div>
          <small class='website-rights'>POLICY PULSE © 2023 All rights reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
