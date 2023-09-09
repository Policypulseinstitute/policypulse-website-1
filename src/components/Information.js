import React from 'react';
import './Information.css';


function BackgroundImageComponent({ image}) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div style={backgroundImageStyle}  className="background-image-container">
      <div className="info-title">Expertise</div>
      
      <p className="info-text"><span className="highlighted">Policy Pulse</span> is a knowledge-for-policy institute providing research and advisory services to organisations and governments.</p>
      <p className="info-text">At <span className="highlighted">Policy Pulse</span> we support policymakers and political institutions with evidence-based solutions when addressing complex issues.</p>
      <p className="info-text">At <span className="highlighted">Policy Pulse</span> we are an experienced team that brings together a unique blend of global policy expertise and frontier quantitative techniques, with comprehensive know-how in <span className="highlighted-other">policy development and evaluation, data analytics, and political advisory services.</span></p>
    </div>
  );
}

export default BackgroundImageComponent;