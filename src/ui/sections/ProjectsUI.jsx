import TopHeader from "./TopHeader";

import "../styles/projects.css";
import "../styles/animations.css";

function ProjectsUI() {
  return (
    <div className="ui-projects">

      {/* Header */}
      <div className="animate-fade-up">
        <TopHeader
          title="Projects"
          subtitle="Academic and personal projects associated with placement profiles"
        />
      </div>

      {/* Content */}
      <div className="ui-projects__content animate-fade-up delay-1">

        {/* Empty State (matches video style) */}
        <div className="ui-projects__empty">
          <h3>No projects available</h3>
          <p>
            Projects linked to student profiles will appear here once added.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProjectsUI;
