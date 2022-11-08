import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import Container from "react-bootstrap/Container";
import profile from "../assets/Images/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const ParticlesAnimation = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      particles: {
        color: {
          animation: {
            enable: true,
            speed: 30,
          },
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          size: true,
          speed: {
            min: 1,
            max: 1,
          },
        },
        number: {
          value: 50,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
            startValue: "max",
            destroy: "min",
            speed: 0.3,
            sync: true,
          },
        },

        shape: {
          type: ["image"],
          image: [
            {
              src: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/128/3459/3459621.png",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/128/919/919852.png",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/128/4492/4492311.png",
            },
          ],
        },
        size: {
          value: 20,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  });

  return (
    <div className="main">
      <Particles init={particlesInit} options={options} className="particles" />
      <div className="about" id="about">
        <Container>
          <div className="info">
            <div className="name">
              <TypeAnimation
                sequence={[
                  "Hi, my name is  Nathalia",
                  1000,
                  "I am into web development",
                  1000,
                  "I am into Frontend Development",
                  1000,
                  "I am into Backend Development",
                  1000,
                ]}
                speed={40} // Must be in range between 1 and 99!
                wrapper="span"
                repeat={Infinity}
                style={{ fontSize: "2rem", fontWeight: "800" }}
              />
            </div>
            <div className="about-me">
              <p>
                An innovative Web Developer with a legal background specializing
                in Front-End.
              </p>
            </div>
            <div className="links">
              <a href="https://github.com/nathaliafguedes" target="_blank">
                Github
              </a>
              <a href="https://www.linkedin.com/in/nathaliafguedes/" target="_blank">
                Linkedin
              </a>
              <a
                href="https://drive.google.com/file/d/1LbMbrl4YkmjQ2T58ICVrj5IDHWQ6E1FP/view?usp=sharing"
                target="_blank" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <Tilt>
              <img src={profile} alt="profile-picture" />
            </Tilt>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ParticlesAnimation;
