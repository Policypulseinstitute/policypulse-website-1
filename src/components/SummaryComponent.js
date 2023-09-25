import React from 'react';
import './SummaryComponent.css';
import Pillars from './bkg-pillars.png'; // Make sure the path is correct

function SummaryComponent() {
  return (
    <div className='summary-container'>
      <img src={Pillars} alt='Pillars' className='summary-image' /> {/* Added Image */}
      <p className='summary-text'>Policy Pulse is a catalyst for transformative policy solutions, combining academic rigor, practical expertise, and strategic foresight to address unique and potentially pressing and complex policy challenges.</p>
    </div>
  );
}

export default SummaryComponent;