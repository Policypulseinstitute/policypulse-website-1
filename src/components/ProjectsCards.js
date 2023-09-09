import React from 'react';
import './ProjectsCards.css'; 

function ProjectsComponent({ projects }) {
  return (
    <div className="projects-container">
      <div className="component-title">Latest Projects</div>
      
      {projects.map(project => (
        <div className="project-tile" key={project.id}>
          <a href={project.link} className="project-link">Go to {project.title}</a>
          <img src={project.imageUrl} alt={project.title} />
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponent;

