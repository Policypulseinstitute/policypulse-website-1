import React from 'react';
import { cardOne, cardTwo } from './Data';
import Footer from '../../Footer';
import FigmaFrame from '../../ExpertCard';



function Team() {
  return(
    <>
      <FigmaFrame {...cardOne} />
      <FigmaFrame {...cardTwo} />
      <Footer/>
    </>
  );
}

export default Team;