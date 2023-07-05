import React from 'react';
import './ExpertNote.css';


function Expert({ lightBg, lightText, lightTextDesc, topLine, headLine, description1, description2, img, alt, imgStart}) {

  return(
    <>
    <div className={lightBg ? 'expert-section' :
    'expert-section darkBg'}>
      <div className="container">
        <div className="row expert-row"
        style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
          <div className="col">
            <div className="expert-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
              <p className={lightTextDesc ? 'expert-subtitle' : 'expert-subtitle dark'}>{description1}</p>
              <p className={lightTextDesc ? 'expert-subtitle' : 'expert-subtitle dark'}>{description2}</p>
            </div>
          </div>
          <div className="col">
            <img src={img} alt={alt} className="expert-img"></img>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}

export default Expert