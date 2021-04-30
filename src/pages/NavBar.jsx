import Nav  from "react-bootstrap/Nav";
import { useState } from 'react';

export const NavBar = props => {
    console.log(props)

    const [key, setKey] = useState('/');

    const selectKey = (selectedKey) => {
        setKey(selectedKey);
    }

    return (
        <Nav justify variant="tabs my-3" activeKey={key} onSelect={selectKey}>
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
    )
}