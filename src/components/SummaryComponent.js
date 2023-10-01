import React from 'react';
import './SummaryComponent.css';
import Pillars from './bkg-pillars.png';

function SummaryComponent() {
  return (
    <div className='outer-container'> {/* Added outer container */}
      <div className='summary-container'>
        <img src={Pillars} alt='Pillars' className='summary-image' />
        <p className='summary-text'>We combine academic rigour, practical expertise, and strategic vision to help leaders and organisations address research and policy challenges.</p>
      </div>
    </div>
  );
}

export default SummaryComponent;

/* <h1 className='summary-title'>
<span className='title-part2'> Transformative Resarch and Policy Solutions</span>
</h1>

       <span className='title-part1'>A catalyst for</span> */