import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Developer", "Machine Learning Engineer", "CS Student"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; 

    useEffect(() => { 
        let ticker = setInterval(() => { 
            tick();
        },delta)
        return () => { clearInterval(ticker)}
    }, [text])
    

    const tick = () => { 
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i]; 
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText); 

        if (isDeleting) { 
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) { 
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') { 
            setIsDeleting(false);
            setLoopNum(loopNum+1); 
            setDelta(500);
        }
    }
    const onUpdateActiveLink = (value) => { 
        if (value === 'connect') {
            const element = document.getElementById('connect');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Element with id "connect" not found');
            }
        }
    }


    return ( 
         <section className="banner" id = "home">
            <Container> 
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}> 
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                            <span className="tagline"> Welcome to my Portfolio</span>
                            <h1>Hi I'm Cora <span className="wrap">{text}</span></h1> 
                            <p> 
                            I'm always excited to connect with like-minded individuals and explore new opportunities. Whether you're interested in my work, have a project idea, or just want to chat about tech, feel free to reach out!
                            Explore my projects, learn more about my skills, and get in touch with me through the contact section of this site.
                            </p>
                            <button onClick={() => onUpdateActiveLink('connect')}>Let's Connect <ArrowRightCircle size={(25)}></ArrowRightCircle></button>
                            </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={headerImg} alt="Header Img" /> 
                    </Col>
                </Row>
            </Container>
         </section>
    )
}