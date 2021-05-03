import Slide from 'react-reveal/Slide';
import Pdf from '../docs/john-furlong-resume.pdf';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { ReactComponent as CvSvg } from '../img/CvSvg.svg';
import Image from "../img/profile-avatar.jpg"

export function Contact(props) {

    return (
        <div className="main">
            <Slide bottom duration={1600}>
                <div className="tab-main">
                    <div className="home-text pt-3 ml-5">
                        <div class="image-cropper mr-0">
                            <img src={Image} alt="Me" className="avatar rounded" />
                        </div>
                    </div>
                    <div className="home-text pt-2">
                        <h1 style={{textAlign: "center"}}>Contact Me</h1>
                        <p style={{textAlign: "center"}}>
                            Looking to discuss a project or just say hello?
                            My inbox is open!
                        </p>
                        <div className="social-media-container">
                            <div className="social-media mt-3 mb-1">
                                <a href="https://github.com/jfur1" style={{color: "black"}} target="_blank" rel="noreferrer">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>GitHub</strong>
                                            </Tooltip>
                                    }>
                                        <i class="fab fa-github fa-3x"></i>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://www.linkedin.com/in/john-furlong-3b2259150/" target="_blank" rel="noreferrer">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>LinkedIn</strong>
                                            </Tooltip>
                                    }>
                                        <i class="fab fa-linkedin fa-3x mx-3"></i>
                                    </OverlayTrigger>
                                </a>
                                <a href="mailto:johnfurlong24@gmail.com" style={{color: "#ea4335"}} target="_blank" rel="noreferrer">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Gmail</strong>
                                            </Tooltip>
                                    }>
                                        <i class="fab fa-google fa-3x"></i>
                                    </OverlayTrigger>
                                </a>
                                <a href={Pdf} target="_blank" rel="noreferrer">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>My Resume</strong>
                                            </Tooltip>
                                    }>
                                        <CvSvg className="mx-3 mt-1" height="2.5rem" width="2.5rem"/>
                                    </OverlayTrigger>
                                </a>
                            </div>
                            <div className="social-media-buttons mt-4">

                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}