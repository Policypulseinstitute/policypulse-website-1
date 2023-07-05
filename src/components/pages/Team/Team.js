import React from 'react';
import { teamOne, teamTwo } from './Data';
import Footer from '../../Footer';
import FigmaFrame from '../../ExpertCard';



function Team() {
  return(
    <>
      <FigmaFrame {...teamOne} />
      <FigmaFrame {...teamTwo} />
      <Footer/>
    </>
  );
}

export default Team;