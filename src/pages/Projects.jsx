import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  function handleAddProject() {
    const newProject = {
      id: Date.now(),
      title: "Placement Analytics Dashboard",
      description: "Student placement insights and analytics tool",
      status: "Active",
    };

    setProjects((prev) => [...prev, newProject]);
  }

  return (
    <div className="ui-dashboard">
      <h2>Projects</h2>

      {projects.length === 0 ? (
        <div style={{ marginTop: 24 }}>
          <p style={{ color: "#94a3b8" }}>
            No projects available. Projects linked to student profiles
            will appear here once added.
          </p>

          <button
            className="ui-btn primary"
            style={{ marginTop: 16 }}
            onClick={handleAddProject}
          >
            Add Project
          </button>
        </div>
      ) : (
        <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid #1e293b",
                borderRadius: 12,
                padding: 16,
                backgroundColor: "#020617",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span
                style={{
                  fontSize: 12,
                  color: "#22c55e",
                  fontWeight: 500,
                }}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
