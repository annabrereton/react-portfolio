import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

function Portfolio({ projects }) {
  return (
    <div className="portfolio-container">
      <h2>All Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div className="project-tile" key={index}>
            <img className="project-image" style={{ width: '100%' }} src={project.image} alt={project.title} />
            <div className="name-view">
              <span className="project-name">{project.title}</span>
              <Link to={`/project/${index}`} className="view">View &gt;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
