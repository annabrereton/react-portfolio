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

// import './portfolio.css';
// import {useState} from "react";
// import {useEffect} from "react";
// import BASE_URL from "../../settings";
// import {Link, useNavigate} from 'react-router-dom';
// import Project from "../Project";
//
// function Portfolio() {
//
//   const [projects, setProjects] = useState([]);
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
//   const [error, setError] = useState(null)
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(BASE_URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const data = await response.json();
//         setProjects(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchData();
//   }, []);
//
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//
//   const handleProjectClick = (index) => {
//     setCurrentProjectIndex(index);
//     navigate(`/project/${index}`);
//   };
//
//   const navigateToNextProject = () => {
//     setCurrentProjectIndex((prevIndex) =>
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//
//   const currentProject = projects[currentProjectIndex];
// // console.log(currentProject)
//   return (
//     <div className="portfolio-container">
//       <h2>All Projects</h2>
//       <div className="project-gallery">
//         {projects.map((project, index) => (
//           <div
//             className="project-tile"
//             key={index}
//             onClick={() => handleProjectClick(index)}
//           >
//             <img className="project-image" src={project.image} alt={project.title}/>
//             <div className="name-view">
//               <h4 className="project-name">{project.title}</h4>
//               <Link to={`/project/${index}`} className="view">View &gt;</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Project projects={projects}
//                navigateToNextProject={navigateToNextProject}
//                currentProject={currentProject}
//       />
//     </div>
//   );
// }
//
// export default Portfolio;
//
// {/*<Route*/}
// {/*  path="/project/:currentProjectIndex"*/}
// {/*  render={(props) => (*/}
// {/*    <Project*/}
// {/*      projects={projects}*/}
// {/*      currentProjectIndex={props.match.params.currentProjectIndex}*/}
// {/*      navigateToNextProject={navigateToNextProject}*/}
// {/*    />*/}
// {/*  )}*/}
// {/*/>*/}
//
// // useEffect(() => {
// //   const fetchedData = async () => {
// //     await fetch(BASE_URL)
// //       .then((res) => {
// //         if (!res.ok) {
// //           throw new Error("Failed to fetch projects");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => {
// //         setProjects(data);
// //       })
// //       .catch((error) => {
// //         setError(error.message);
// //       });
// //   }
// //   fetchedData()
// // }, []);