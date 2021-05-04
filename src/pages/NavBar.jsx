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
            document.getElementById("home-mobile").style.borderBottom = "3px solid red";
            setTab("home");
            return;
        }

        else if(tab !== activeTab){
            document.getElementById(activeTab).style.borderBottom = "3px solid red";
            document.getElementById(activeTab+"-mobile").style.borderBottom = "3px solid red";
            document.getElementById(tab).style.borderBottom = "";
            document.getElementById(tab+"-mobile").style.borderBottom = "";
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
                <div className="desktop-nav">
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
                </div>

            <div className="mobile-nav">
                <input class="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" for="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="/home" id="home-mobile" style={{width: "20%"}}>Home</a>
                    </li>
                    <li>
                        <a href="/education" id="education-mobile" style={{width: "30%"}}>Education</a>
                    </li>
                    <li>
                        <a href="/projects" id="projects-mobile" style={{width: "24%"}}>Projects</a>
                    </li>
                    <li>
                        <a href="/contact" id="contact-mobile" style={{width: "23%"}}>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
        </Fade>
    )
}