import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cora.png";
import linkedIn from '../assets/img/nav-icon1.svg'; 
import github from '../assets/img/github-mark-white.svg'; 

export const Footer = () => { 
    return ( 
        <footer className="footer"> 
            <Container> 
                <Row className="align-item-center"> 
                    <Col sm={6}> 
                        <img src={logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/corazhang/"><img src={linkedIn}/></a>
                            <a href="https://github.com/coraleaf0602"><img src={github}/></a>
                        </div> 
                        <p>CopyRight 2024.  All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}