import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import pcmc from "../../Assets/Projects/pcmc.jpg";
import pawspace from "../../Assets/Projects/pawsapce.jpg";
import Kuerbuddy from "../../Assets/Projects/kurebuddy.jpg";
import yarnX from "../../Assets/Projects/yarnX.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={pawspace}
              isBlog={false}
              title="Pet Care Application"
              description="Pawspace is a comprehensive pet care application developed using React. The platform offers various services for pet owners, including booking appointments, accessing pet care resources, and managing pet information. The focus of my work was on developing the admin panel to streamline the management of services, users, and other backend operations."
              // ghLink="https://github.com/shubhamnalage/PawspaceAdminPanel"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kuerbuddy}
              isBlog={false}
              title="Kuerbuddy Health Care Application"
              description="Kuerbuddy Health Care Application is a comprehensive platform developed using React, designed to facilitate various healthcare services. The application includes multiple user interfaces for different stakeholders, including clinics, polyclinics, hospitals, doctors, labs, and pharmacies. My role focused on implementing CRUD operations and designing the front-end pages for the admin panel, super admin, and doctor panel."
              // ghLink="https://github.com/shubhamnalage"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yarnX}
              isBlog={false}
              title="Trading Application"
              description="yarnX is a comprehensive trading application focused on the yarn market, developed using React. The application leverages WebSocket APIs for real-time data updates and trading activities, ensuring a seamless and responsive user experience."
              // ghLink="https://github.com/shubhamnalage"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcmc}
              isBlog={false}
              title="Pimpri Chinchwad Municipal Corporation Management System "
              description="PCMC is a comprehensive municipal corporation management system developed using React. The application comprises 36 modules designed to streamline various administrative and public services. My role involved working on five key modules: Slum Billing Management System, Social Development, Right to Information, Grievance, and Electric Bill Management System, along with various integrations"
              // ghLink="https://github.com/shubhamnalage"
              demoLink="https://noncoreerp.pcmcindia.gov.in"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
