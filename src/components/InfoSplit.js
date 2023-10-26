import React from 'react';
import './InfoSplit.css';

function SplitComponent({ title, subtitle, par1, par2, image }) {
  return (
    <div className="split-component-container">
      <div className="text-section">
        <div className="split-title">{title}</div>
        <div className="split-subtitle">{subtitle}</div>
        <p className="split-text" >{par1}</p>
        <p className="split-text">{par2}</p>
      </div>
      <div className="image-section">
        <img src={image} alt="Descriptive alt text" />
      </div>
    </div>
  );
}

export default SplitComponent;