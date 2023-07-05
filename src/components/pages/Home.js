import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import FigmaFrame from '../ExpertCard';
import { cardOne, cardTwo, cardThree, cardFour } from './Expertise/Data';
import { teamOne, teamTwo } from './Team/Data';

function Home() {
  return (
    <>
      <HeroSection />
      <FigmaFrame {...cardOne} />
      <FigmaFrame {...cardTwo} />
      <FigmaFrame {...cardThree} />
      <FigmaFrame {...cardFour} />
      <FigmaFrame {...teamOne} />
      <FigmaFrame {...teamTwo} />
      <Footer />
    </>
  );
}

export default Home;
