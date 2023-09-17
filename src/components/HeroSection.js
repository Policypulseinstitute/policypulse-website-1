import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/home1.mp4' autoPlay loop muted />
      <h1>
        Knowledge and Data Analytics
      </h1>
      <div className='hero-sub'>
        <h1>
          for Policy
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
