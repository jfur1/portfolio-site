import Fade from 'react-reveal/Fade';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Pdf from '../docs/john-furlong-resume.pdf';
import CloudPng from '../img/cloud2.svg';
import Tools from '../img/tools.png';
import Brain from '../img/brain.gif';
import { ReactComponent as HtmlSvg } from '../img/html5.svg';
import { ReactComponent as CssSvg } from '../img/css3.svg';
import { ReactComponent as JsSvg } from '../img/logo-javascript.svg';
import { ReactComponent as ReactSvg } from '../img/react-2.svg';
import { ReactComponent as BootstrapSvg } from '../img/bootstrap-5-1.svg';
import { ReactComponent as NodeSvg } from '../img/nodejs-icon.svg';
import { ReactComponent as CppSvg } from '../img/c.svg';
import { ReactComponent as NpmSvg } from '../img/npm-square-red-1.svg';
import { ReactComponent as PhpSvg } from '../img/php-1.svg';
import { ReactComponent as JQuerySvg } from '../img/jquery-1.svg';
import { ReactComponent as PostgresSvg } from '../img/postgresql.svg';
import { ReactComponent as MongoSvg } from '../img/mongodb.svg';
import { ReactComponent as PythonSvg } from '../img/python-logo.svg';
import { ReactComponent as PandasSvg } from '../img/Pandas_logo.svg';
import { ReactComponent as NumpySvg } from '../img/numpy.svg';
import { ReactComponent as AwsSvg } from '../img/aws.svg';
import { ReactComponent as HerokuSvg } from '../img/heroku-1.svg';
import { ReactComponent as GitSvg } from '../img/git-icon.svg';
import { ReactComponent as GitHubSvg } from '../img/github-logo.svg';
import { ReactComponent as AnacondaSvg } from '../img/anaconda.svg';
import { ReactComponent as JupyterSvg } from '../img/jupyter.svg';
import { ReactComponent as MySqlSvg } from '../img/MySQL-Logo.wine.svg';
import { ReactComponent as VbSvg } from "../img/vb.svg";
import { ReactComponent as VMwareSvg } from "../img/vmware.svg";
import { ReactComponent as Me } from '../img/me.svg';
import { ReactComponent as CvSvg } from '../img/CvSvg.svg';
import { ReactComponent as SoftwareDevSvg } from '../img/custom-software-development.svg';
import { ReactComponent as PivotalSvg } from '../img/Tracker_Icon.svg';

export const Home = (props) => {
  
    return (
        <div className="main">
            <Fade bottom duration={1600}>
                <div className="home-main">
                    <div className="home-text mt-2">
                        <h1>John Furlong</h1>
                        <p style={{fontSize: "2vw"}}>Computer Science graduate from the University of Colorado Boulder. I enjoy
                            a good challenge annd working on meaningful projects that take me outside my comfort zone.
                            Looking to join a collabrative and innovate team where I can continue to build end to end products.
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
                    <div className="home-img ml-5 mt-3">
                        <Me width="80%"/>
                    </div>
            </div>
            </Fade>
            
            <Fade bottom duration={1800} delay={300}>
                <h1 className="skills-section" style={{fontFamily: "Noto Sans JP, sans-serif", fontSize: "50px"}}>Who am I?</h1>
            </Fade>
                <div className="skills-main mb-5">
                    <Fade left duration={2000}>
                    <div className="skills-img">
                        <SoftwareDevSvg/>
                    </div>
                    </Fade>
                    <Fade right duration={2000}>
                    <div className="skills-text">
                        <h1 className="skills-heading" style={{fontSize: "40px"}}>Full Stack Development</h1>
                        <div className="skills-icons">
                            <ul className="icons" style={{paddingInlineStart: "30px;"}}>
                                <li name="HTML5" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>HTML5</strong>
                                            </Tooltip>
                                    }>
                                        <HtmlSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="CSS3" className="dev-icon">
                                <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>CSS3</strong>
                                            </Tooltip>
                                    }>
                                        <CssSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="JavaScript" className="dev-icon ml-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>JavaScript</strong>
                                            </Tooltip>
                                    }>
                                        <JsSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="React.js" className="dev-icon ml-3 mr-1">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>React.js</strong>
                                            </Tooltip>
                                    }>
                                        <ReactSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="bootstrap" className="dev-icon ml-2 mr-3">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Bootstrap 5</strong>
                                            </Tooltip>
                                    }>
                                        <BootstrapSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="nodeJS" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Node.js</strong>
                                            </Tooltip>
                                    }>
                                        <NodeSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="C++" className="dev-icon ml-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>C++</strong>
                                            </Tooltip>
                                    }>
                                        <CppSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="PHP" className="dev-icon ml-2 mr-1" style={{selfAlign: "center"}}>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>PHP</strong>
                                            </Tooltip>
                                    }>
                                        <PhpSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="npm" className="dev-icon ml-2 mr-3">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>NPM</strong>
                                            </Tooltip>
                                    }>
                                        <NpmSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="jQuery" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>jQuery</strong>
                                            </Tooltip>
                                    }>
                                        <JQuerySvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="postgreSQL" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>PostgreSQL</strong>
                                            </Tooltip>
                                    }>
                                        <PostgresSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="mongoDB" className="dev-icon mx-1">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>MongoDB</strong>
                                            </Tooltip>
                                    }>
                                        <MongoSvg/>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-text-list">
                            <p>🔸 &nbsp;&nbsp;Highly skilled in designing, testing, and developing software</p>
                            <p>🔸 &nbsp;&nbsp;Strong understanding of data structures and algorithms</p>
                            <p>🔸 &nbsp;&nbsp;Knowledge of full-stack development best practices</p>
                            <p>🔸 &nbsp;&nbsp;Great communication skills</p>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="skills-main my-5">
                    <Fade left duration={2000}>
                    <div className="skills-img">
                        <img src={Brain} alt="Loading..." width="99%" height="400px"></img>
                    </div>
                    </Fade>
                    <Fade right duration={2000}>
                    <div className="skills-text">
                        <h1 className="skills-heading" style={{fontSize: "40px"}}>Data Science & AI</h1>
                        <div className="skills-icons">
                            <ul className="icons">
                                <li name="Python" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Python</strong>
                                            </Tooltip>
                                    }>
                                        <PythonSvg/>
                                    </OverlayTrigger>                    
                                </li>
                                <li name="pandas" className="dev-icon mx-1">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Pandas</strong>
                                            </Tooltip>
                                    }>
                                        <PandasSvg/>
                                    </OverlayTrigger>       
                                </li>
                                <li name="numpy" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>NumPy</strong>
                                            </Tooltip>
                                    }>
                                        <NumpySvg/>
                                    </OverlayTrigger>   
                                </li>
                            </ul>
                        </div>
                        <div className="skills-text-list">
                            <p>🔸 &nbsp;&nbsp;Interested in machine learning and artificial intelligence</p>
                            <p>🔸 &nbsp;&nbsp;Data visualization using packages like numpy and pandas</p>
                            <p>🔸 &nbsp;&nbsp;Experience with computer vision and deep learning</p>
                            <p>🔸 &nbsp;&nbsp;Experience with data preprocessing and scalable automation</p>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="skills-main my-5">
                    <Fade left duration={2000}>
                    <div className="skills-img mb-3">
                        <img src={CloudPng} alt="Cloud Computing" width="100%" height="450px"></img>
                    </div>
                    </Fade>
                    <Fade right duration={2000}>
                    <div className="skills-text">
                        <h1 className="skills-heading mb-1" style={{fontSize: "40px"}}>Cloud Architecture</h1>
                        <div className="skills-icons">
                            <ul className="icons">
                                <li name="AWS" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>AWS</strong>
                                            </Tooltip>
                                    }>
                                        <AwsSvg/>
                                    </OverlayTrigger>   
                                </li>
                                <li name="Heroku" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Heroku</strong>
                                            </Tooltip>
                                    }>
                                        <HerokuSvg/>
                                    </OverlayTrigger>  
                                </li>
                            </ul>
                        </div>
                        <div className="skills-text-list">
                            <p>🔸 &nbsp;&nbsp;Experience deploying via AWS services like S3, RDS, and EC2</p>
                            <p>🔸 &nbsp;&nbsp;Hosting and maintaining websites on clustered instances</p>
                            <p>🔸 &nbsp;&nbsp;Deployment of websites using Heroku</p>
                            <p>🔸 &nbsp;&nbsp;Integration of databases hosted on distributed systems</p>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="skills-main mt-5">
                    <Fade left duration={2000}>
                    <div className="skills-img mt-2">
                        <img src={Tools} alt="Cloud Computing" width="100%" height="450px"></img>
                    </div>
                    </Fade>
                    <Fade right duration={2000}>
                    <div className="skills-text">
                        <h1 className="skills-heading" style={{fontSize: "40px"}}>Tools & Technologies</h1>
                        <div className="skills-icons">
                            <ul className="icons">
                                <li name="git" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Git</strong>
                                            </Tooltip>
                                    }>
                                        <GitSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="GitHub" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>GitHub</strong>
                                            </Tooltip>
                                    }>
                                        <GitHubSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="Pivotal" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Pivotal Tracker</strong>
                                            </Tooltip>
                                    }>
                                        <PivotalSvg height="1em" width="1em"/>
                                    </OverlayTrigger>
                                </li>
                                <li name="Jupyter" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Jupyter Notebook</strong>
                                            </Tooltip>
                                    }>
                                        <JupyterSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="Anaconda" className="dev-icon mx-1">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>Anaconda</strong>
                                            </Tooltip>
                                    }>
                                        <AnacondaSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="MySQL" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>MySQL</strong>
                                            </Tooltip>
                                    }>
                                        <MySqlSvg/>
                                    </OverlayTrigger>
                                </li>
                                <li name="VirtualBox" className="dev-icon">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>VirtualBox</strong>
                                            </Tooltip>
                                    }>
                                        <VbSvg height="1.25em" width="1.2em"/>
                                    </OverlayTrigger>
                                </li>
                                <li name="VMware" className="dev-icon mx-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                <strong>VMware</strong>
                                            </Tooltip>
                                    }>
                                        <VMwareSvg height=".5em" width="2em"/>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                        <div className="skills-text-list">
                            <p>🔸 &nbsp;&nbsp;Git/Github for version control and Pivotal for progress tracking</p>
                            <p>🔸 &nbsp;&nbsp;Jupyter/Anaconda for data science and visualization</p>
                            <p>🔸 &nbsp;&nbsp;MySQL Workbench for relational models</p>
                            <p>🔸 &nbsp;&nbsp;Hypervisors like VMware and VirtualBox for development in Linux environments</p>
                        </div>
                    </div>
                    </Fade>
                </div>
        </div>
    )
}