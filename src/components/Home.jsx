import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Home.css';
import profile from '../assets/profile.png';

function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      color: { value: "#ff4a57" },
      links: {
        color: "#ff4a57",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.8 } },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="home">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      )}

      <div className="home-content">
        <div className="left">
          <h4>HELLO!</h4>
          <h2>I'm Deepika Angel K</h2>
          <p>
            Passionate about AI, Machine Learning, and Data Science, 
            building intelligent solutions to solve real-world problems.
            Transforming innovative ideas into scalable, impactful full-stack applications.
          </p>
          <div className="buttons">
            <a href="/Deepika_Angel_K_Resume.pdf" download="Deepika_Angel_K_Resume.pdf" className="btn-primary">
    Get Resume
  </a>
            <a href="https://github.com/deepikaangelk" target="_blank" rel="noopener noreferrer" className="btn-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/deepika-angel-k-460139296/" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>

        <div className="right">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;