import React from 'react';
import './MottoComponent.css';

function MottoComponent() {
  return (
      <div className='motto-container'>
        <p className='motto-text'>Primum Non Desipere</p>
        <p className='motto-explanation'> 
          Our motto means 
          <span className="motto-highlighted">"First, Do Not Act Foolishly"</span> 
          <br /> {/* Added Line Break */}
          It conveys our commitment to prioritizing wisdom and discernment in our advice and recommendations, reflecting our pursuit of excellence and thoughtful consideration in all we do.
        </p>
    </div>
  );
}

export default MottoComponent;
