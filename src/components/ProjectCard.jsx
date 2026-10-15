import { Link } from "react-router-dom";
import { getPrimaryColor } from "../utils/techColors";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const accent = getPrimaryColor(project.technologies);
  let hostname = "";
  try {
    hostname = project.liveUrl ? new URL(project.liveUrl).hostname : "";
  } catch {
    hostname = "";
  }

  return (
    <div className="project-card" style={{ "--card-accent": accent }}>
      <div className="card-image">
        <div className="browser-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          {hostname && <span className="browser-url">{hostname}</span>}
        </div>
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop";
          }}
        />
      </div>

      <div className="card-title-row">
        <span className="lang-dot" style={{ background: accent }} />
        <h3>{project.title}</h3>
        {project.liveUrl && <span className="live-badge">Live</span>}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="tech-tags">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="tech-tag"
            style={{
              borderColor: `${getPrimaryColor([tech])}55`,
              color: getPrimaryColor([tech]),
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <span className="update-date">Updated {project.lastUpdated}</span>
        <Link to={`/project/${project.id}`} className="btn-details">
          View Details →
        </Link>
      </div>

      <div className="project-links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          GitHub
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
  );
};

export default ProjectCard;
