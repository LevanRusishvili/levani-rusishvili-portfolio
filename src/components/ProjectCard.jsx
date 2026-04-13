import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img
          src={project.image} // ← Use actual image path
          alt={project.title}
          onError={(e) => {
            // Only use fallback if image fails to load
            e.target.src =
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop";
          }}
        />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-footer">
          <span className="update-date">Updated: {project.lastUpdated}</span>
          <Link to={`/project/${project.id}`} className="btn-details">
            View Details →
          </Link>
        </div>

        {/* Project Links */}
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
    </div>
  );
};

export default ProjectCard;
