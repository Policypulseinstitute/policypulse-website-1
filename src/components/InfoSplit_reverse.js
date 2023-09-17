import React from 'react';
import './InfoSplit.css';

function SplitComponentReverse({ title, subtitle, par1, par2, par3, image }) {
  return (
    <div className="split-component-container">
      <div className="image-section">
        <img src={image} alt="Descriptive alt text" />
      </div>
      <div className="text-section">
        <div className="split-title" style={{ fontFamily: 'Futura, sans-serif' }}>{title}</div>
        <div className="split-subtitle" style={{ fontFamily: 'Times New Roman, sans-serif' }}>{subtitle}</div>
        <p className="split-text">{par1}</p>
        <p className="split-text">{par2}</p>
        <p className="split-text">{par3}</p>
      </div>
    </div>
  );
}

export default SplitComponentReverse;