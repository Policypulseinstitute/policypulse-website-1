import React from 'react';
import './Project.css';

function ProjectShowcase({
  title,
  imagePath,
  description,
  area,
  goal,
  lead,
  deliverable,
  pdfPath,
  websiteLink
}) {
  return (
    <div className="project-container">
      
      {/* Left Panel */}
      <div className="project-info">
        <h3>Project Details</h3>
        <p><strong>Area:</strong> {area}</p>
        <p><strong>Goal:</strong> {goal}</p>
        <p><strong>Lead:</strong> {lead}</p>
        <p><strong>Deliverable:</strong> {deliverable}</p>
        <div className="project-actions">
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <button>Project Website</button>
            </a>
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
            <button>Summary Document</button>
            </a>
        </div>
      </div>
      {/* Right Panel */}s
      <div className="project-main">
        <h2 className="projecttitle">{title}</h2>
        <img src={imagePath} alt={title} />
        <p className="info-text">{description}</p>
      </div>
    </div>
  );
}

export default ProjectShowcase;
