import './Projects.css'
// Import the images at the top so Vite includes them in the build
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'

function Projects() {
  const projectData = [
    {
      title: "Malicious URL Detection",
      description: "Web app that classifies URLs as malicious or safe using ML. Features include feature extraction, dataset preprocessing, and real-time deployment on Render.",
      tools: ["Python", "Flask", "ML", "Render"],
      github: "https://github.com/deepikaangelk", 
      image: project1Img
    },
    {
      title: "Smart AI Invoice Extractor",
      description: "AI system that extracts structured invoice data using OCR and Gemini API. Includes dashboards and analytics for automated financial tracking.",
      tools: ["Flask", "OCR", "Gemini API", "Chart.js"],
      github: "https://github.com/deepikaangelk",
      image: project2Img
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="tech-pills">
                {project.tools.map((tool, i) => (
                  <span key={i} className="pill">{tool}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-btns">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-fill">View Github</a>
              </div>
            </div>
            <div className="project-image-container">
              <div className="image-border-effect">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;