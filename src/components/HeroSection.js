import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/home1.mp4' autoPlay loop muted />
      <h1>
      Knowledge and Data Analytics<br />
      <span className="second-line">for Policy</span>
      </h1>
      <div className='hero-inner'>
        <h2>
        Blending academic insight and policy expertise to equip leaders and organisations with innovative, evidence-based solutions.
        </h2>
      </div>
    </div>
  );
}

export default HeroSection;
