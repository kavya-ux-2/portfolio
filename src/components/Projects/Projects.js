import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SnackGame from "../../Assets/Projects/SnackGame.png";
import veco_harvest from "../../Assets/Projects/Screenshot 2025-06-20 162212.png";
import AIEmailreply from "../../Assets/Projects/AI_Email_reply.png";
import EcommerceWebsite from "../../Assets/Projects/Ecommerce.png";
import Notes_Summarizer_AI from "../../Assets/Projects/notesSummarizer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIEmailreply}
              isBlog={false}
              title="Email AI Assistant"
              description="An AI-powered web application that helps users generate professional emails replies from simple prompts.This full-stack project is built with React (frontend) and Spring Boot (backend)."
              ghLink="https://github.com/kavya-ux-2/Email_Ai_Assistant/tree/main"
              demoLink="https://email-ai-assistant-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notes_Summarizer_AI}
              isBlog={false}
              title="Notes-Summarizer-AI"
              description="A clean, modern dashboard interface of a Notes Summarizer web app, with a document upload panel, an AI-generated summary box, and export buttons. The design should look professional, with AI elements (like a brain icon, or lines of text being condensed). Use a light theme with blue and green accents."
              ghLink="https://github.com/kavya-ux-2/Notes_Summarizer_AI?tab=readme-ov-file"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veco_harvest}
              isBlog={false}
              title="veco-harvest"
              description="Eco-Harvest is a web platform designed to promote sustainable agriculture by connecting waste vendors with farmers. It simplifies the process of collecting organic waste and converting it into useful bio-chemicals, supporting eco-friendly farming practices."
              ghLink="https://github.com/kavya-ux-2/vceo-harvest"
              demoLink="https://veco-harvest.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnackGame}
              isBlog={false}
              title="SnackGame-Java"
              description="A modern implementation of the classic Snake game built with Java Swing, featuring enhanced graphics, progressive difficulty, and a web-compatible HTML5 version."
              ghLink="https://github.com/kavya-ux-2/SnackGame-SnackGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceWebsite}
              isBlog={false}
              title="EcommerceWebsite"
              description="EcommerceWebsite for clothing brand using HTML,CSS,Javascript."
              ghLink="https://github.com/kavya-ux-2/EcommerceWebsite"
              demoLink="https://carabrand.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
