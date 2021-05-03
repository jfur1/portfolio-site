import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react'

export const NavBar = props => {
    const [tab, setTab] = useState("home");

    useEffect(() => {
        console.log(window.location.pathname)
        var activeTab = window.location.pathname.substring(1, window.location.pathname.length);

        if(activeTab === "" || activeTab === "home"){
            activeTab = "home";
            document.getElementById("home").style.borderBottom = "3px solid red";
            setTab("home");
            return;
        }

        else if(tab !== activeTab){
            document.getElementById(activeTab).style.borderBottom = "3px solid red";
            document.getElementById(tab).style.borderBottom = "";
            setTab(activeTab);
            return;
        }
    }, [tab]);

    return (
        <Fade top duration={1600}>
            <header className="header">
                <a className="signature" href="/home">
                    <span className="signature-style">&lt; John Furlong /&gt;</span>
                </a>
                <ul className="menu">
                    <li id="home" className="mx-4 pb-1">
                        <a href="/home">Home</a>
                    </li>
                    <li id="education" className="mx-4 pb-1">
                        <a href="/education" id="education">Education</a>
                    </li>
                    <li id="projects" className="mx-4 pb-1">
                        <a href="/projects" id="projects">Projects</a>
                    </li>
                    <li id="contact" className="mx-4 pb-1">
                        <a href="/contact" id="contact">Contact</a>
                    </li>
                </ul>
            </header>
        </Fade>
    )
}