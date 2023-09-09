import React from 'react';
import { cardOne, cardTwo, cardThree, cardFour } from './Data';
import Footer from '../../Footer';
import FigmaFrame from '../../ExpertCard';
import ProjectsComponent from '../../ProjectsCards';
import TeamComponent from '../../TeamPictures';
import ImageComponent from '../../Partners';




function Projects() {

  const projectsData = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: 'images/img-1.jpg', link: '/project1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2', imageUrl: 'images/img-2.jpg', link: '/project2' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3', imageUrl: 'images/img-3.jpg', link: '/project3' },
    { id: 4, title: 'Project 4', description: 'Description for Project 4', imageUrl: 'images/img-4.jpg', link: '/project4' },
  ];

  const teamMembers = [
    { photoUrl: "images/team/sstouli.png", name: "Sami Stouli", position: "Director" },
    { photoUrl: "images/team/ssokullu.png", name: "Senay Sokullu", position: "Senior Economist" },
    { photoUrl: "images/team/sespinosa.jpeg", name: "Silvia Espinosa", position: "Senior Economist" },
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
      <ProjectsComponent projects={projectsData}/>
      <TeamComponent members={teamMembers} />
      <ImageComponent images={partnersImgs} />
      <Footer/>
    </>
  );
}

export default Projects;