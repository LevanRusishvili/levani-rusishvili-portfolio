import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetailPage.css";

const ProjectDetailPage = () => {
  const { projectId } = useParams(); //url dan waikitxavs projectId-s  routershi gviweria tu pathname iqneba  <Route path="/project/:projectId" element={<ProjectDetailPage /> } /> am project/projectId s kitxulobs useParam
  const project = projects.find((p) => p.id === projectId); //projectshi vedzebt romeli objecti unda darenderdes, id s mixedvit, id unda daemtxvas url-shi coffee-shop an travel-planners 

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project Not Found</h2>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">
        ← Back to Projects
      </Link>

      <div className="detail-header">
        <h1>{project.title}</h1>
        <div className="detail-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
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

      <div className="detail-content">
        <div className="detail-image">
          <img
            src={project.image} // ← Use actual image path, NOT fallback
            alt={project.title}
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop";
            }}
          />
        </div>

        <div className="detail-info">
          <h2>About This Project</h2>
          <p className="project-long-description">{project.longDescription}</p>

          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Technologies Used</h3>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-item">
                {tech}
              </span>
            ))}
          </div>

          <p className="project-meta">
            <strong>Last Updated:</strong> {project.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
