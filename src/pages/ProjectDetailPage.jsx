import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { getPrimaryColor } from "../utils/techColors";
import "./ProjectDetailPage.css";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="not-found">
        <h2>$ Error: project not found</h2>
        <Link to="/" className="back-link">
          ← cd ~/
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">
        ← Back to projects
      </Link>

      <div className="detail-terminal-header">
        <div className="terminal-titlebar">
          <span className="dot" style={{ background: "#ff5f56" }} />
          <span className="dot" style={{ background: "#ffbd2e" }} />
          <span className="dot" style={{ background: "#27c93f" }} />
        </div>
        <div className="detail-terminal-body">
          <div className="prompt-line">
            <span className="cmd">
              $ cd ~/projects/{project.id} && cat readme.md
            </span>
          </div>

          <div className="detail-header">
            <h1>{project.title}</h1>
            <div className="detail-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
              >
                View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-image">
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop";
            }}
          />
        </div>

        <div className="detail-info">
          <h2>About</h2>
          <p className="project-long-description">{project.longDescription}</p>

          <h3>features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>stack</h3>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tech-item"
                style={{ color: getPrimaryColor([tech]) }}
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="project-meta">
            git log --last-updated: {project.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
