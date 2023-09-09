import React from 'react';
import './TeamPictures.css';

function TeamComponent({ members }) {
    return (
      <div className="team-container">
        <div className="team-title">Our Core Team</div>
        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.photoUrl} alt={member.name} className="team-photo" />
              <div className="team-info">
                <div className="team-name">{member.name}</div>
                <div className="team-position">{member.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TeamComponent;