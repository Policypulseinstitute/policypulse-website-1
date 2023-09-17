import React from 'react';
import './Information.css';


function BackgroundImageComponent({ image}) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div style={backgroundImageStyle}  className="background-image-container">
      <div className="info-title" style={{ fontFamily: 'Futura, sans-serif' }}>What We Do</div>
      
      <p className="info-text"><span className="highlighted" style={{ fontFamily: 'Futura, sans-serif' }}>Policy Pulse</span> is a knowledge-for-policy institute working in partnership with organisations and governments to provide research and advisory services.</p>
      <p className="info-text">At <span className="highlighted" style={{ fontFamily: 'Futura, sans-serif' }}>Policy Pulse</span> we build bridges between cutting-edge research and real-world implementation by supporting policymakers with evidence-based solutions to complex issues.</p>
      <p className="info-text">At <span className="highlighted" style={{ fontFamily: 'Futura, sans-serif' }}>Policy Pulse</span> we are an experienced team that brings together a unique blend of global policy expertise and frontier academic research, with comprehensive know-how in <span className="highlighted-other">policy development and evaluation, data analytics, and political advisory services.</span></p>
    </div>
  );
}

export default BackgroundImageComponent;