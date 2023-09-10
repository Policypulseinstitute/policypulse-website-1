import React from 'react';
import './Partners.css';

function ImageComponent({ images }) {
    return (
      <div className="image-container">
        <div className="image-title">Our Team Has Worked With</div>
        <div className="image-grid">
          {images.map((imageUrl, index) => (
            <div className="image-item" key={index}>
              <img src={imageUrl} alt={`Partner: ${index + 1}`} className="single-image" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default ImageComponent;
