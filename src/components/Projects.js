import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dellImg1 from "../assets/img/project-img1.png";
import dellImg2 from "../assets/img/project-img2.png";
import dellImg3 from "../assets/img/project-img3.png";
import flightImg1 from "../assets/img/flight-img1.png"; 
import flightImg2 from "../assets/img/flight-img2.png"; 
import flightImg3 from "../assets/img/flight-img3.png"; 
import flightImg4 from "../assets/img/flight-img4.png"; 
import flightImg5 from "../assets/img/flight-img5.png"; 
import flightImg6 from "../assets/img/flight-img6.png"; 
import outputPlot from "../assets/img/output.png"; 
import crossPlot from "../assets/img/cross.png"; 
import mnistChar from "../assets/img/mnistchar.jpg";
import spaceInvader1 from "../assets/img/space-invader-img1.png";
import spaceInvader3 from "../assets/img/space-invader-img3.png";
import spaceInvader4 from "../assets/img/space-invader-img4.png";
import pong1 from "../assets/img/pong-img1.png";
import pong2 from "../assets/img/pong-img2.png";
import pong3 from "../assets/img/pong-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const dell = [
    {
      title: "Business Startup",
      description: "Python, Flask, SQLite, HTML",
      imgUrl: dellImg1,
      link: "https://github.com/coraleaf0602/SemanticProductLink",
    },
    {
      title: "Business Startup",
      description: "Python, Flask, SQLite, HTML",
      imgUrl: dellImg2,
      link: "https://github.com/coraleaf0602/SemanticProductLink",
    },
    {
      title: "Business Startup",
      description: "Python, Flask, SQLite, HTML",
      imgUrl: dellImg3,
      link: "https://github.com/coraleaf0602/SemanticProductLink",
    },
  ];

  const formula = [

  ];

  const flightApp = [
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg1,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg2,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg3,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg4,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg5,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },
    {
      title: "Data Analysis",
      description: "Java, Git, Processing", 
      imgUrl: flightImg6,
      link: "https://github.com/coraleaf0602/flightAnalysisApplication",
    },

  ];

  const mnist = [
    {
      title: "MNIST Classifier",
      description: "Python, PyTorch, Torchvision, NumPy, Matplotlib, Pillow", 
      imgUrl: mnistChar,
      link: "https://github.com/coraleaf0602/mnist-classifier/",
    },
    {
      title: "MNIST Classifier",
      description: "Python, PyTorch, Torchvision, NumPy, Matplotlib, Pillow", 
      imgUrl: outputPlot,
      link: "https://github.com/coraleaf0602/mnist-classifier/",
    },
    {
      title: "MNIST Classifier",
      description: "Python, PyTorch, Torchvision, NumPy, Matplotlib, Pillow", 
      imgUrl: crossPlot,
      link: "https://github.com/coraleaf0602/mnist-classifier/",
    },
  ];

  const spaceInvader = [
    {
      title: "Space Invaders",
      description: "Java, Processing",
      imgUrl: spaceInvader1,
      link: "https://github.com/coraleaf0602/space-invaders",
    },
    {
      title: "Space Invaders",
      description: "Java, Processing",
      imgUrl: spaceInvader3,
      link: "https://github.com/coraleaf0602/space-invaders",
    },
    {
      title: "Space Invaders",
      description: "Java, Processing",
      imgUrl: spaceInvader4,
      link: "https://github.com/coraleaf0602/space-invaders",
    },
  ];

  const pong = [
    {
      title: "Pong",
      description: "Java, Processing",
      imgUrl: pong1,
      link: "https://github.com/coraleaf0602/pong-game",
    },
    {
      title: "Pong",
      description: "Java, Processing",
      imgUrl: pong2,
      link: "https://github.com/coraleaf0602/pong-game",
    },
    {
      title: "Pong",
      description: "Java, Processing",
      imgUrl: pong3,
      link: "https://github.com/coraleaf0602/pong-game",
    },
  ];

  const handleSelect = (eventKey) => {
    if (eventKey === "first") {
      window.location.href = "https://github.com/coraleaf0602/SemanticProductLink";
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Feel free to look through my projects on GitHub!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleSelect}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Semantic Product Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cone Detection AI Model</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Flight Analysis App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">MNIST Classifier</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Space Invaders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Pong</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row>
                        {
                          dell.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.location.href = project.link}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <Row>
                          {
                            formula.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => window.location.href = project.link}
                                  />
                              )
                            })
                          }
                      </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          flightApp.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.location.href = project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          mnist.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.location.href = project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        {
                          spaceInvader.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.location.href = project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <Row>
                        {
                          pong.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => window.location.href = project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}