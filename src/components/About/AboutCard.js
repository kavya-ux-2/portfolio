import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ranga Kavya </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently looking for opportunity as a software developer.
            <br />
            I am currently pursuing my Bachelor of Engineering in Computer Science and Engineering at Sambhram Institute of Technology, and will be graduating in 2026.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Poem Writing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ranga Kavya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
