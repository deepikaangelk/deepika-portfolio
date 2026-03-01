import './About.css'
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa'; // Install react-icons

function About() {
  return (
    <section id="about" className="about">
      {/* Top Tech Stack Bar */}
      <div className="tech-stack">
        <span>Python</span>
        <span>Java</span>
        <span>Javascript</span>
        <span>React</span>
        <span>Flask</span>
        <span>SQL</span>
        <span>Cloud</span>
      </div>

      <div className="about-container">
        {/* Left Side: Services */}
        <div className="about-left">
          <div className="service-item">
            <div className="icon-box">
              <FaCode />
            </div>
            <div className="service-text">
              <h3>Website Development</h3>
            </div>
          </div>

          <div className="service-item">
            <div className="icon-box">
              <FaMobileAlt />
            </div>
            <div className="service-text">
              <h3>App Development</h3>
            </div>
          </div>

          <div className="service-item">
            <div className="icon-box">
              <FaCloud />
            </div>
            <div className="service-text">
              <h3>Cloud Deployment</h3>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <h1>About me</h1>
          <p>
            Hello! I’m Deepika Angel K, a Final-Year Computer Science Engineering student. 
            I enjoy solving real-world problems using AI, Machine Learning, and Data Science, 
            while also developing scalable full-stack web applications. My projects focus 
            on combining intelligence with usability — turning data into meaningful insights.
          </p>

          <div className="stats">
            <div className="stat-item">
              <h2>5+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h2>Intern</h2>
              <p>Work Experience</p>
            </div>
            <div className="stat-item">
              <h2>Final Yr</h2>
              <p>CSE Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About