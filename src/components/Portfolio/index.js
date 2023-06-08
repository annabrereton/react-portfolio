import ProjectImage from '../../images/project-img.png';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>
        Portfolio
      </h1>
      <h2>
        Check out some examples of my work below.
      </h2>
      <ul className="project-list">
        <li className="project-card">
          <article>
            <h3>
              Project 1
            </h3>
            {/*update to foreach through projects and update src and alt*/}
            <img className="project-image" src={ProjectImage} alt="Project image" />
            <div className="project-links">
              <a className="project-link" href="#" aria-label="github">
                <FaGithub />
              </a>
              <a className="project-link" href="#" aria-label="live project link">
                <FaLink />
              </a>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </article>
        </li>
      </ul>
    </div>
  );
}
export default Portfolio;