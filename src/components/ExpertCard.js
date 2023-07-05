import React from 'react';


function FigmaFrame({ imgPath, alt}) {

    return(
      <div>
        <img src={imgPath} alt={alt} />
      </div>
    );
  
  }
  
  export default FigmaFrame