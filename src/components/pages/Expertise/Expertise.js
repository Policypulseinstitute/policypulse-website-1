import React from 'react';
import { cardOne, cardTwo, cardThree, cardFour } from './Data';
import Footer from '../../Footer';
import FigmaFrame from '../../ExpertCard';



function Expertise() {
  return(
    <>
      <FigmaFrame {...cardOne} />
      <FigmaFrame {...cardTwo} />
      <FigmaFrame {...cardThree} />
      <FigmaFrame {...cardFour} />
      <Footer/>
    </>
  );
}

export default Expertise;