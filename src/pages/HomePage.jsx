import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Levan Rusishvili</h1>
          <p className="hero-subtitle">React Developer</p>
          <p className="hero-description">
            I build modern web applications with React. Here are my recent
            projects.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
