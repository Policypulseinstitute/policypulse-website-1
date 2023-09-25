import React from 'react';
import './TeamPictures.css';
import Pillars from './bkg-pillars2.png'; // Make sure the path is correct

function TeamComponent({ members }) {
    return (
      <div className="team-container"  style={{ backgroundImage: `url(${Pillars})` }}> {/* Modified Line */}
          <div className="team-title" >
          Our Core Team
          </div>
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