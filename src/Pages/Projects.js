import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const residentialProjects = [
    { name: "40 Residential Flats", path: "residential-flats-wanyee", location: "Wanyee Road, Nairobi", year: "2009 – 2011" },
    { name: "24 Executive Flats", path: "executive-flats-city-park", location: "City Park Estate, Nairobi", year: "2013 – 2015" },
    { name: "65 Residential Flats", path: "residential-flats-nakuru", location: "Nakuru", year: "2013 – 2015" },
    { name: "Two Luxury Bungalows", path: "luxury-bungalows-runda", location: "Runda Meadows, Nairobi", year: "2011 – 2015" },
    { name: "1 Bungalow", path: "bungalow-nyari", location: "Nyari Estate, Nairobi", year: "2006 – 2007" }
  ];

  const commercialProjects = [
    { name: "Waridi House (6-Story Office Block)", path: "waridi-house", location: "Butere Road, Nairobi", year: "Completed 2014" },
    { name: "Six-Story Office Block & Godowns", path: "office-block-babadogo", location: "Baba Dogo Road, Nairobi", year: "2009 – 2011" },
    { name: "Warehouse & Office Block", path: "warehouse-ruaraka", location: "Ruaraka", year: "2011 (Completed in 8 Months)" },
    { name: "9 Warehouses", path: "warehouse-changamwe", location: "Changamwe Road, Nairobi", year: "2007 – 2009" },
    { name: "1 Warehouse", path: "warehouse-ruaraka-single", location: "Ruaraka, Nairobi", year: "2010" }
  ];

  const specialtyProjects = [
    { name: "Church Building (1,250-Seater)", path: "church-chumvi", location: "Chumvi Town, Machakos", year: "2014 – 2017" },
    { name: "Guest House", path: "guest-house-makutano", location: "Makutano, Kyumbi, Machakos", year: "Completed 2017" }
  ];

  return (
    <div id="projects">
      <div className="project-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="pgtitle">PROJECTS</h1>

        {/* Residential Projects */}
        <div className="project-category">
          <h2 className="pgtitle">Residential Developments 🏠</h2>
          <div className="project-list">
            {residentialProjects.map((project, index) => (
              <div key={index} className="project-card">
                <p className="boxplan"><strong>{project.name}</strong></p>
                <p className="boxplan">Location: {project.location}</p>
                <p className="boxplan">Year: {project.year}</p>
                <Link to={`/projects/${project.path}`}>
                  <button className="project-button">Go to Project</button>
                </Link>
                <br></br>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Projects */}
        <div className="project-category">
          <h2 className="pgtitle">Commercial & Industrial Projects 🏢</h2>
          <div className="project-list">
            {commercialProjects.map((project, index) => (
              <div key={index} className="project-card">
                <p className="boxplan"><strong>{project.name}</strong></p>
                <p className="boxplan">Location: {project.location}</p>
                <p className="boxplan">Year: {project.year}</p>
                <Link to={`/projects/${project.path}`}>
                  <button className="project-button">Go to Project</button>
                </Link>
                
                <br></br>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>

        {/* Specialty Projects */}
        <div className="project-category">
          <h2 className="pgtitle">Specialty & Institutional Projects ⛪</h2>
          <div className="project-list">
            {specialtyProjects.map((project, index) => (
              <div key={index} className="project-card">
                <p className="boxplan"><strong>{project.name}</strong></p>
                <p className="boxplan">Location: {project.location}</p>
                <p className="boxplan">Year: {project.year}</p>
                <Link to={`/projects/${project.path}`}>
                  <button className="project-button">Go to Project</button>
                </Link>
                
                <br></br>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
