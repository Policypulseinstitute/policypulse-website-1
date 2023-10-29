import React from 'react';
import './Background.css';

function BackgroundComponent() {
  const fontStyle = {
    fontFamily: 'Avenir',
  };

  return (
    <div className="background-container">
      <div className="info-title" style={fontStyle}> What We Do</div>
      
      <p className="info-text"> <span className="highlighted" style={fontStyle}>Policy Pulse</span> is a knowledge-for-policy institute working in partnership with organisations and governments to provide research and advisory services.  XXXXX</p>
      <p className="info-text"> At <span className="highlighted" style={fontStyle}>Policy Pulse</span> we build bridges between cutting-edge research and real-world implementation by supporting policymakers with innovative, evidence-based solutions to complex issues.</p>
      <p className="info-text"> At <span className="highlighted" style={fontStyle}>Policy Pulse</span> we are an experienced team that brings together a unique blend of academic knowledge and global policy expertise, with comprehensive know-how in <span className="highlighted-other">policy development and evaluation, data analytics, and political advisory services.</span></p>
    </div>
  );
}

export default BackgroundComponent;