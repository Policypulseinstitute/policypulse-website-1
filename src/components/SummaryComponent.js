import React from 'react';
import './SummaryComponent.css';
import Pillars from './bkg-pillars.png';

function SummaryComponent() {
  return (
    <div className='summary-container'>
      <h1 className='summary-title'>
        <span className='title-part1'>A catalyst for</span>
        <span className='title-part2'> Transformative Policy Solutions</span>
      </h1>
      <img src={Pillars} alt='Pillars' className='summary-image' />
      <p className='summary-text'>Combining academic rigor, practical expertise, and strategic foresight to address unique, potentially pressing and complex policy challenges.</p>
    </div>
  );
}

export default SummaryComponent;
