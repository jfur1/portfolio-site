import Nav  from "react-bootstrap/Nav";

export const NavBar = (props) => {



    return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/education">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}