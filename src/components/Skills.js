import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap"; 
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import c from "../assets/img/c.svg";
import javascript from "../assets/img/javascript.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import react from "../assets/img/react.svg";
import colourSharp from "../assets/img/color-sharp.png";

export const Skills = () => { 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return ( 
        <section className="skill" id="skills">
            <Container> 
                <Row> 
                    <Col> 
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>
                            <p>Here are a few of the languages and frameworks that I know!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider"> 
                                <div className="item"> 
                                    <img src={java} alt="Image" /> 
                                    <h5>Java</h5>
                                </div>
                                <div className="item"> 
                                    <img src={python} alt="Image" /> 
                                    <h5>Python</h5>
                                </div>
                                <div className="item"> 
                                    <img src={c} alt="Image" /> 
                                </div>
                                <div className="item"> 
                                    <img src={javascript} alt="Image" /> 
                                    <h5>JS</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colourSharp}></img>
        </section>
      )
}