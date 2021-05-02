import Slide from 'react-reveal/Slide';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { ReactComponent as Svg } from "../img/data-science.svg";
import { Project } from './Project';
import { ReactComponent as HtmlSvg } from '../img/html5.svg';
import { ReactComponent as CssSvg } from '../img/css3.svg';
import { ReactComponent as JsSvg } from '../img/logo-javascript.svg';
import { ReactComponent as ReactSvg } from '../img/react-2.svg';
import { ReactComponent as NodeSvg } from '../img/nodejs-icon.svg';
import { ReactComponent as PostgresSvg } from '../img/postgresql.svg';
import { ReactComponent as CSvg } from '../img/c-programming.svg';
import { ReactComponent as PythonSvg } from '../img/python-logo.svg';
import { ReactComponent as JQuerySvg } from '../img/jquery-1.svg';

export function Projects(props) {

    return (
        <div className="main">
            <Slide bottom duration={1600}>
                <div className="tab-main">
                    <div className="tab-text">
                        <Svg style={{width: "100%", height: "300px", display: "flex"}}/>
                    </div>
                    <div className="tab-text">
                        <h1 style={{textAlign: "center"}}>Projects</h1>
                        <p style={{textAlign: "center"}}>
                            Computer Science graduate from the University of Colorado Boulder.
                            Computer Science graduate from the University of Colorado Boulder.
                            Computer Science graduate from the University of Colorado Boulder.
                            Computer Science graduate from the University of Colorado Boulder.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="React application to visualize various pathfinding algorithms."    
                        created="January 2021"
                        href="https://jfur1.github.io/pathfinding/"
                        Img1={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>HTML5</strong>
                                </Tooltip>
                                }>
                            <HtmlSvg height="2.5em" width="2em" className="my-1"/>
                            </OverlayTrigger>}
                        Img2={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>CSS3</strong>
                                </Tooltip>
                                }>
                            <CssSvg width="3em" height="3em"/>
                        </OverlayTrigger>}
                        Img3={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>JavaScript</strong>
                                </Tooltip>
                                }>
                            <JsSvg height="2.5em" width="2em" className="my-1 mx-1"/>
                        </OverlayTrigger>}
                        Img4={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>React.js</strong>
                                </Tooltip>
                                }>
                            <ReactSvg height="2.5em" width="2.5em" className="my-1 ml-1"/>
                        </OverlayTrigger>}
                    />
                    <Project 
                        project = "my-portfol.io"
                        description="Full stack web application for users to host their portfolios on."    
                        created="January 2021"
                        href="http://www.my-portfol.io"
                        Img1={                            
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>HTML5</strong>
                                </Tooltip>
                                }>
                            <HtmlSvg height="2.5em" width="2em" className="my-1"/>
                            </OverlayTrigger>}
                        Img2={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>React.js</strong>
                                </Tooltip>
                                }>
                            <ReactSvg height="2.5em" width="2.5em" className="my-1 ml-1"/>
                        </OverlayTrigger>}
                        Img3={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Node.js</strong>
                                </Tooltip>
                                }>
                            <NodeSvg height="2.5em" width="2.5em" className="my-1 mx-1"/>
                        </OverlayTrigger>}
                        Img4={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>PostgreSQL</strong>
                                </Tooltip>
                                }>
                            <PostgresSvg height="2.5em" width="2.5em" className="my-1"/>
                        </OverlayTrigger>}
                    />
                    <Project 
                        project = "Forte Music App"
                        description="Full stack application to match musicians with local tutors. Users can register, login, create lesson meetings, and search for teachers."    
                        created="May 2019"
                        href="https://github.com/jfur1/cs-project"
                        Img1={                            
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>HTML5</strong>
                                </Tooltip>
                                }>
                            <HtmlSvg height="2.5em" width="2em" className="my-1"/>
                            </OverlayTrigger>}
                        Img2={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>jQuery</strong>
                                </Tooltip>
                                }>
                            <JQuerySvg height="2.5em" width="4em" className="my-1 ml-1"/>
                        </OverlayTrigger>}
                        Img3={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Node.js</strong>
                                </Tooltip>
                                }>
                            <NodeSvg height="2.5em" width="2.5em" className="my-1 mx-1"/>
                        </OverlayTrigger>}
                        Img4={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>PostgreSQL</strong>
                                </Tooltip>
                                }>
                            <PostgresSvg height="2.5em" width="2.5em" className="my-1"/>
                        </OverlayTrigger>}
                    />
                    <Project 
                        project = "DNS Name Resolution Engine"
                        description="Multi-threaded application, written in C, which resolves domain names to IP addresses. Requester/resolver threads share a memory buffer via mutex locks, pthreads, and semaphores."    
                        created="July 2020"
                        href="https://github.com/jfur1/operating-systems/tree/master/PA3"
                        Img1={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>C</strong>
                                </Tooltip>
                                }>
                            <CSvg className="ml-5"/>
                        </OverlayTrigger>}
                    />
                    <Project 
                        project = "Blob Detection"
                        description="Python program implementing blob detection via color filtering, blob expansion, and centroid computations."    
                        created="January 2021"
                        href="https://github.com/jfur1/blob-detection"
                        Img1={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Python</strong>
                                </Tooltip>
                                }>
                            <PythonSvg height="3em" width="6em" className="my-1 mx-2"/>
                        </OverlayTrigger>}
                    />
                    <Project 
                        project = "Sorting Visualizer"
                        description="React application to visualize various sorting algorithms like DFS, BFS, Astar, and Dijkstra's."    
                        created="January 2021"
                        href="https://jfur1.github.io/sorting-visualizer/"
                        Img1={                            
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>HTML5</strong>
                                </Tooltip>
                                }>
                            <HtmlSvg height="2.5em" width="2em" className="my-1"/>
                            </OverlayTrigger>}
                        Img2={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>CSS3</strong>
                                </Tooltip>
                                }>
                            <CssSvg width="3em" height="3em"/>
                        </OverlayTrigger>}
                        Img3={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>JavaScript</strong>
                                </Tooltip>
                                }>
                            <JsSvg height="2.5em" width="2em" className="my-1 mx-1"/>
                        </OverlayTrigger>}
                        Img4={
                            <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>React.js</strong>
                                </Tooltip>
                                }>
                            <ReactSvg height="2.5em" width="2.5em" className="my-1 ml-1"/>
                        </OverlayTrigger>}
                    />
                </div>
                <div className="tab-text mt-5" style={{textAlign: "center"}}>
                    <a href="https://github.com/jfur1?tab=repositories" target="_blank" rel="noreferrer" style={{display: "inline-block"}} >
                        <div className="btn btn-outline-primary mb-5">More Projects</div>
                    </a>
                </div>
            </Slide>
            <div className="tab-text">

            </div>
        </div>
    )
}