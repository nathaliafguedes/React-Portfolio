import React from "react";
import Card from "react-bootstrap/Card";
import html_Logo from "../assets/Images/html-5.png";
import css_Logo from "../assets/Images/css-3.png";
import js_Logo from "../assets/Images/js-logo.png";
import django_Logo from "../assets/Images/python-logo.png";
import react_Logo from "../assets/Images/react-logo.png";
import redux_Logo from "../assets/Images/redux-logo.png";
import github_Logo from "../assets/Images/github-icon.png";
import sql_Logo from "../assets/Images/sql-logo.png";
import replit_Logo from "../assets/Images/replit-logo.png";
import Tilt from "react-parallax-tilt";
import { Slide } from "react-awesome-reveal";

const Technologies = () => {
  return (
    <div className="technologies" id="technologies">
      <div className="heading">
        <h1>Tech Stack</h1>
      </div>
      <Card className="skills-card">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="left">
            <div className="logos">
              <Card.Img variant="top" src={react_Logo} />
              <Card.Title>React</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="down">
            <div className="logos">
              <Card.Img variant="top" src={redux_Logo} />
              <Card.Title>Redux</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="right">
            <div className="logos">
              <Card.Img variant="top" src={django_Logo} />
              <Card.Title>Python</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="left">
            <div className="logos">
              <Card.Img variant="top" src={js_Logo} />
              <Card.Title>JavaScript</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <div className="logos">
            <Card.Img variant="top" src={html_Logo} />
            <Card.Title>HTML5</Card.Title>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="right">
            <div className="logos">
              <Card.Img variant="top" src={css_Logo} />
              <Card.Title>CSS3</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="left">
            <div className="logos">
              <Card.Img variant="top" src={sql_Logo} />
              <Card.Title>SQL</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="up">
            <div className="logos">
              <Card.Img variant="top" src={github_Logo} />
              <Card.Title>Github</Card.Title>
            </div>
          </Slide>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <Slide direction="right">
            <div className="logos">
              <Card.Img variant="top" src={replit_Logo} />
              <Card.Title>Replit</Card.Title>
            </div>
          </Slide>
        </Tilt>
      </Card>
    </div>
  );
};

export default Technologies;
