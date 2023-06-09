// import ProjectImage from "../../images/project-img.png";
import {FaGithub, FaLink} from "react-icons/fa";

function Project({ title, image, description, githubLink, liveLink }) {
  return (
    <div className="project-container">
      <ul className="project-list">
        <li className="project-card">
          <article>
            <h3 className="project-title">{title}</h3>
            <img className="project-image" src={image} alt="Project image" />
            <div className="project-description-links">
              <p className="project-description">{description}</p>
              <div className="project-links">
                <a className="project-link" href={githubLink} aria-label="github">
                  <FaGithub />
                </a>
                {/*{liveLink && (*/}
                {/*  <a className="project-link" href={liveLink} aria-label="live project link">*/}
                {/*    <FaLink />*/}
                {/*  </a>*/}
                {/*)}*/}
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default Project;