import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Businedd Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animated__animated__slideInUp" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus eget quam lacinia dignissim a a erat. Sed sollicitudin gravida justo non venenatis. Maecenas a justo et est aliquet fermentum id ac purus. Fusce elementum libero id sapien sollicitudin, id aliquet sapien vestibulum. Aenean fringilla risus non nisl viverra, a auctor nisl laoreet. Sed sollicitudin odio a dui aliquet, eget hendrerit tellus consequat. Fusce in ex vel purus hendrerit accumsan in et enim. Sed aliquet nisi a arcu tincidunt, quis elementum tortor faucibus. Quisque sed orci eget turpis eleifend condimentum vel ut libero. Praesent sed venenatis libero.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section >
  )
}