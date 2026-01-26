import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  function addDummyProject() {
    setProjects([
      ...projects,
      { name: "Placement Analytics Tool" },
    ]);
  }

  return (
    <div>
      <h2>Projects</h2>

      {projects.length === 0 ? (
        <>
          <p>
            No projects available. Projects linked to student
            profiles will appear here once added.
          </p>
          <button onClick={addDummyProject}>
            Add Project
          </button>
        </>
      ) : (
        <ul>
          {projects.map((p, i) => (
            <li key={i}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
