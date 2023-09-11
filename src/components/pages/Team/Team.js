import React from 'react';
import Footer from '../../Footer';
import TeamComponent from '../../TeamPictures';
import ImageComponent from '../../Partners';



function Team() {
  const teamMembers = [
    { photoUrl: "images/team/sstouli.png", name: "Sami Stouli", position: "Director" },
    { photoUrl: "images/team/ssokullu.png", name: "Senay Sokullu", position: "Senior Economist" },
    { photoUrl: "images/team/sespinosa.png", name: "Silvia Espinosa", position: "Senior Economist" },
    { photoUrl: "images/team/dlara.png", name: "Diego Lara", position: "Data Scientist" },
    { photoUrl: "images/team/yaitakdim.png", name: "Youssef Ait Akdim", position: "Senior Political Advisor" },
  ];

  const partnersImgs = [
    "images/partners/logo_an.png",
    "images/partners/logo_dep.png",
    "images/partners/logo_ec.png",
    "images/partners/logo_mar.png",
    "images/partners/logo_min.png",
    "images/partners/logo_ons.png",
    "images/partners/logo_pay.png",
    "images/partners/logo_rni.png",
    "images/partners/logo_une.png",
    "images/partners/logo_wb.png",
  ];

  return(
    <>
      <TeamComponent members={teamMembers} />
      <ImageComponent images={partnersImgs} />
      <Footer/>
    </>
  );
}

export default Team;