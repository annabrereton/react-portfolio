import './portfolio.css';
import Project from "../../components/Project";
import {useState} from "react";
import {useEffect} from "react";
import BASE_URL from "../../settings";

function Portfolio() {

  const [projects, setProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchedData = async () => {
      await fetch(BASE_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch projects");
          }
          return res.json();
        })
        .then((data) => {
          setProjects(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    fetchedData()
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const navigateToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current project based on the currennpmtProjectIndex
  const currentProject = projects[currentProjectIndex];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p className="tagline">Check out some examples of my work below.</p>
      {currentProject && (
        <Project
          title={currentProject.title}
          image={currentProject.image}
          description={currentProject.description}
          githubLink={currentProject.githubLink}
          liveLink={currentProject.liveLink}
        />
      )}
      <button onClick={navigateToNextProject}>&gt;</button>
    </div>
  );
}

export default Portfolio;