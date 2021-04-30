import Nav  from "react-bootstrap/Nav";

export const NavBar = (props) => {

    return (
        <Nav justify variant="tabs my-3" defaultActiveKey="home">
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