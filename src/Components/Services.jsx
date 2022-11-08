import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <div className="skills" id="skills">
      <Container>
        <div className="heading">
          <h2>What I do</h2>
        </div>
        <Row>
          <Col>
            <div className="skill-heading">
              <h3>Web Development</h3>
            </div>
            <div className="description">
              <p>
                The tasks associated with creating, building, and maintaining
                websites and web applications that run online on a browser.
                Including web design, web programming, and database management.
                A Full-Stack Developer is someone familiar with both front- and
                back-end development. Full Stack Developers usually understand a
                wide variety of programming languages and are versatile.
              </p>
            </div>
          </Col>
          <Col>
            <div className="skill-heading">
              <h3>Github</h3>
            </div>
            <div className="description">
              <p>
                GitHub is a code hosting platform for version control and
                collaboration. It lets you and others work together on projects
                from anywhere.A repository is usually used to organize a single
                project. Repositories can contain folders and files, images,
                videos, spreadsheets, and data sets -- anything your project
                needs. Often, repositories include a README file, a file with
                information about your project.
              </p>
            </div>
          </Col>
          <Col>
            <div className="skill-heading">
              <h3>Web Flow</h3>
            </div>
            <div className="description">
              <p>
                Webflow is a website design tool to help people build websites
                without having to worry about coding. With a drag-and-drop
                interface, the user builds the site they want in the editor, and
                when it’s finished Webflow automatically generates the
                appropriate HTML, CSS or JavaScript.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
