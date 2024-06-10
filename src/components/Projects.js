import { Col, Container, Tab, Row, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./ProjectCard"; 
import colourSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => { 

    const projects = [
        {
            title: "", 
            description: "", 
            imgUrl: projImg1,
        }, 
        {
            title: "", 
            description: "", 
            imgUrl: projImg2,
        }, 
        {
            title: "", 
            description: "", 
            imgUrl: projImg3,
        }, 
        {
            title: "", 
            description: "", 
            imgUrl: projImg2,
        }, 

    ];
    return ( 
        <section className="project" id="project">
            <Container> 
                <Row> 
                    <Col> 
                    <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__bounce" : ""}>
                                <h2>Projects</h2>
                                <p> Blah blah blah </p>
                            </div> }
                    </TrackVisibility>
                        <Tab.Container id="prpjects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                                <Tab.Pane eventKey="second">Text</Tab.Pane>
                                <Tab.Pane eventKey="third">Text</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container> 
            <img className="background-image-right" src={colourSharp2}></img>
        </section>
    )
}