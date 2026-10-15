import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-path">~/levan-rusishvili — zsh</span>
          </div>

          <div className="terminal-body">
            <div className="prompt-line">
              <span className="cmd">$ whoami</span>
            </div>
            <div className="output-block">
              <div className="output-name">Levan Rusishvili</div>
              <div className="output-role">&gt; React Developer</div>
            </div>

            <div className="prompt-line">
              <span className="cmd">$ cat about.txt</span>
            </div>
            <div className="output-block">
              <p className="output-desc">
                I build fast, responsive web apps with React. Below are{" "}
                {projects.length} shipped projects — clone the code, or open the
                live demo.
                <span className="cursor" />
              </p>
            </div>

            <div className="availability-badge">
              <span className="pulse-dot" />
              Open to work
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                View projects ↓
              </a>
              <a
                href="https://github.com/LevanRusishvili"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <p className="section-eyebrow">// projects</p>
        <h2 className="section-title">Recent Work</h2>
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
