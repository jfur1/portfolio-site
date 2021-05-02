import Fade from 'react-reveal/Fade';

export const NavBar = props => {

    return (
        <Fade top duration={1600}>
            <header className="header">
                <a className="signature" href="/home">
                    <span className="signature-style">&lt; John Furlong /&gt;</span>
                </a>
                <ul className="menu">
                    <li>
                        <a href="/home" style={{backgroundColor:"transparent"}}>Home</a>
                    </li>
                    <li>
                        <a href="/education" style={{backgroundColor:"transparent"}}>Education</a>
                    </li>
                    <li>
                        <a href="/projects" style={{backgroundColor:"transparent"}}>Projects</a>
                    </li>
                    <li>
                        <a href="/contact" style={{backgroundColor:"transparent"}}>Contact</a>
                    </li>
                </ul>
            </header>
        </Fade>
    )
}