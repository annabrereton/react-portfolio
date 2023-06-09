import ProjectImage from "../../images/project-img.png";
import {FaGithub, FaLink} from "react-icons/fa";

function Portfolio() {

  // const projectTitle = ;
  // const projectImage = ;
  // const projectDescription = ;
  // const gitHubLink = ;

  return (
    <div className="project-container">
      <ul className="project-list">
        <li className="project-card">
          <article>
            <h3 className="project-title">
              Project 1
            </h3>
            {/*update to foreach through projects and update src and alt*/}
            <img className="project-image" src={ProjectImage} alt="Project image"/>
            <div className="project-description-links">
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
              </p>
              <div className="project-links">
                <a className="project-link" href="#" aria-label="github">
                  <FaGithub/>
                </a>
                {/*<a className="project-link" href="#" aria-label="live project link">*/}
                {/*  <FaLink/>*/}
                {/*</a>*/}
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;