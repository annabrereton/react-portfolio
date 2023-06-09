import ProjectImage from '../../images/project-img.png';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import '../../portfolio.css';
import Project from "../../components/Project";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>
        Portfolio
      </h1>
      <p className="tagline">
        Check out some examples of my work below.
      </p>
      <Project />
    </div>
  );
}
export default Portfolio;