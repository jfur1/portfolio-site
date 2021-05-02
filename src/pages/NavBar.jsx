import Nav  from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

export const NavBar = props => {
    console.log(props)

    const [key, setKey] = useState('/');

    const selectKey = (selectedKey) => {
        setKey(selectedKey);
    }

    return (
        <Fade top duration={1600}>
            <Nav justify variant="tabs my-3" activeKey={key} onSelect={selectKey}>
            <Navbar.Brand className="ml-5" href="/home" >John Furlong</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link eventKey="home" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="education" href="/education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="projects" href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contact" href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Fade>
    )
}