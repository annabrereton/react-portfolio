import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import BASE_URL from "./settings";

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="webpage-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio projects={projects} />} />
            <Route path="/project/:currentProjectIndex" element={<Project projects={projects} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React, {useState, useEffect} from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import './App.css';
// import Project from "./components/Project";
//
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//           <Navigation />
//           <main className="webpage-body">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/project/:currentProjectIndex" element={<Project />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </main>
//           <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }
//
// export default App;
