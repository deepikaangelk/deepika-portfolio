import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#0a1128",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#c41e3a",
          },
          links: {
            enable: true,
            distance: 180,
            color: "#ff4a57",
            opacity: 0.5,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          size: {
            value: 2.5,
            random: {
              enable: true,
              minimumValue: 1.5,
            },
          },
          opacity: {
            value: 0.8,
          },
        },
        detectRetina: true,
        motion: {
          disable: false,
        },
      }}
    />
  );
}

export default ParticleBackground;
