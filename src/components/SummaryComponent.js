import React from 'react';
import './SummaryComponent.css';
/*import Pillars from './bkg-pillars.png';*/

function SummaryComponent() {
  return (
    <div className='outer-container'> {/* Added outer container */}
      <div className='summary-container'>
        <p className='summary-text'>
          We combine academic rigour, practical expertise, and strategic vision 
          <br/> to craft transformative solutions to research and policy challenges.
          </p>
      </div>
    </div>
  );
}

export default SummaryComponent;

/*          We combine 
          <span style={{color: '#002060'}}> academic rigour</span>, 
          <span style={{color: '#C00000'}}> practical expertise</span>, 
          and 
          <span style={{color: '#7030A0'}}> strategic vision </span> 
          to craft transformative solutions to research and policy challenges.
          </p>
          <img src={Pillars} alt='Pillars' className='summary-image' />
/* <h1 className='summary-title'>
<span className='title-part2'> Transformative Resarch and Policy Solutions</span>
</h1>

       <span className='title-part1'>A catalyst for</span> */


/*        </p>
       <img src={Pillars} alt='Pillars' className='summary-image' />*/