import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/prosjects"; // Adjust the path as needed

function Home() {
  return (
    <main>
      <h2>Welcome to my website</h2>
      <div className="card-container">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <Link to={`/projects/${project.id}`}>
              {" "}
              {/* Adding Link to navigate to ProjectDetail */}
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
            </Link>
            <p>{project.description}</p>
            <div className="links">{/* Other links... */}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
