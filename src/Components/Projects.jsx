import React from "react";
import Card from "react-bootstrap/Card";
import hungerCaptain from "../assets/Videos/hunger-captain.mp4";
import twitterClone from "../assets/Videos/twitterclone.mp4";
import stopWtach from "../assets/Videos/java.mp4";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <Card className="project-card">
        <Slide direction="right">
          <div className="project">
            <div className="video">
              <video src={hungerCaptain} autoPlay controls />
            </div>
            <Card.Body>
              <Card.Title>Hunger Captain</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Technologies Used: Frontend : React Redux ,Backend: Django
              </Card.Subtitle>
              <Card.Text>
                In this web application you will find many informative movie
                reviews, you can compare different reviews on current, upcoming,
                recent, or vintage movies and even get a sneak-peek at the
                trailers. You can filter the movies by genre. This extension is
                built in a more user-friendly manner where they can save time by
                loading all the currently playing movies in a single click.
              </Card.Text>
              <div className="links">
                <Card.Link href="https://github.com/nathaliafguedes/Hunger-Captain">
                  Github Link
                </Card.Link>
                <Card.Link href="#">Replit Link</Card.Link>
              </div>
            </Card.Body>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="project">
            <div className="video">
              <video src={twitterClone} autoPlay controls />
            </div>
            <Card.Body>
              <Card.Title>Twitter Clone</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="links">
                <Card.Link href="https://github.com/nathaliafguedes/twitterclonenew">
                  Card Link
                </Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </div>
            </Card.Body>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="project">
            <div className="video">
              <video src={stopWtach} autoPlay controls />
            </div>
            <Card.Body>
              <Card.Title>Java Stopwatch</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="links">
                <Card.Link href="#">Github Link</Card.Link>
                <Card.Link href="#">Replit Link</Card.Link>
              </div>
            </Card.Body>
          </div>
        </Slide>
      </Card>
    </div>
  );
};

export default Projects;
