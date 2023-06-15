import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './project.css';
import '../../App.css'
import {FaGithub} from "react-icons/fa";

function Project({ projects }) {

  const { currentProjectIndex } = useParams();
  const project = projects[currentProjectIndex];

  if (!project) {
    return <div></div>;
  }

  const navigateToNextProject = () => {
    const nextIndex = (parseInt(currentProjectIndex) + 1) % projects.length;
    window.location.href = `/project/${nextIndex}`;
  };

  return (
    <div className="project-container">
      <article className="project-card">
        <div className="name-link">
          <h3 className="project-name">{project.title}</h3>
          <a className="project-link" href={projects[currentProjectIndex].github} aria-label="github">
          <FaGithub />
          </a>
        </div>
        <div className="image-description">
          <img className="project-image" src={project.image} alt={project.title} />
          <p className="project-description">{project.description}</p>
        </div>
        <div className="back-next">
          <Link to="/portfolio" className="back">
            <span className="arrow">&lt;</span>
            &nbsp; Back to Portfolio
          </Link>
          <button className="next" onClick={navigateToNextProject} className="next">Next &nbsp; &gt;</button>
        </div>
      </article>
    </div>
  );
}

export default Project;
