import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
/* import BackgroundImageComponent from '../Information'; */
import BackgroundComponent from '../Background';
import MottoComponent from '../MottoComponent';
import SplitComponent from '../InfoSplit';
import SplitComponentReverse from '../InfoSplit_reverse';
import SummaryComponent from '../SummaryComponent'; 
import TransitionComponent from '../TransitionComponent'; 
import TeamComponent from '../TeamPictures';
import ImageComponent from '../Partners';

import { cardExpertise, cardData, cardPolicy, cardPolitics} from './Data';

function Home() {

  const teamMembers = [
    { photoUrl: "images/team/sstouli.png", name: "Dr Sami Stouli", position: "Director" },
    { photoUrl: "images/team/ssokullu.png", name: "Dr Senay Sokullu", position: "Senior Economist" },
    { photoUrl: "images/team/sespinosa.png", name: "Dr Silvia Espinosa", position: "Senior Economist" },
    { photoUrl: "images/team/dlara.png", name: "Dr Diego Lara", position: "Data Scientist" },
    { photoUrl: "images/team/yaitakdim.png", name: "Youssef Ait Akdim", position: "Senior Political Advisor" },
  ];

  const partnersImgs = [
    "images/partners/logo_an.png",
    "images/partners/logo_dep.png",
    "images/partners/logo_mar.png",
    "images/partners/logo_min.png",
    "images/partners/logo_ons.png",
    "images/partners/logo_pay.png",
    "images/partners/logo_rni.png",
    "images/partners/logo_une.png",
    "images/partners/logo_wb.png",
  ];
  
  return (
    <>
      <HeroSection />
      <BackgroundComponent {...cardExpertise}/>
      <SummaryComponent /> 
      <TransitionComponent /> 
      <SplitComponent {...cardPolicy}/>
      <SplitComponentReverse {...cardData}/>
      <SplitComponent {...cardPolitics}/>
      <MottoComponent /> 
      <TeamComponent members={teamMembers} />
      <ImageComponent images={partnersImgs} />
      <Footer />
    </>
  );

  /* return (
    <>
      <HeroSection />
      <BackgroundComponent />
      <BackgroundImageComponent {...cardExpertise}/>
      <SplitComponent {...cardPolicy}/>
      <SplitComponentReverse {...cardData}/>
      <SplitComponent {...cardPolitics}/>
      <TeamComponent members={teamMembers} />
      <ImageComponent images={partnersImgs} />
      <Footer />
    </>
  ); */
}

export default Home;
