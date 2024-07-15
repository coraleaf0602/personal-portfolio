import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/cora.png'; 
import linkedIn from '../assets/img/nav-icon1.svg'; 
import github from '../assets/img/github-mark-white.png'; 


export const NavBar = () => { 
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled, seScrolled] = useState(false); 

    useEffect(() => { 
        const onScroll = () => { 
            if(window.scrollY > 50) { 
                seScrolled(true); 
            } else { 
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => { 
        setActiveLink(value);
    }
    return (
     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text"> 
                    <div className="social-icon"> 
                        <a href="https://www.linkedin.com/in/corazhang/"><img src={linkedIn} alt = "" /></a>
                        <a href="https://github.com/coraleaf0602"><img src={github} alt = "" /></a>
                    </div>
                    {/* <button onClick={() => onUpdateActiveLink('connect')}><span>Let's Connect</span></button> */}
                </span>
            </Navbar.Collapse>
        </Container>
     </Navbar>
    )
}