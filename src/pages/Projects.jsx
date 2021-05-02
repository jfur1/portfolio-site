import Slide from 'react-reveal/Slide';
import { ReactComponent as Svg } from "../img/data-science.svg"
import { Project } from './Project';

export function Projects(props) {

    return (
        <div className="main">
            <Slide bottom duration={1600}>
                <div className="tab-main">
                    <div className="tab-text">
                        <Svg style={{width: "100%", height: "300px", display: "flex"}}/>
                    </div>
                    <div className="tab-text">
                        <h1 >Projects</h1>
                        <p>
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
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                    <Project 
                        project = "Pathfinding Visualizer"
                        description="Website for users to host their portfolios on!"    
                        created="January 2021"
                    />
                </div>
                <div className="tab-text mt-5" style={{textAlign: "center"}}>
                    <a href="https://github.com/jfur1" target="_blank" rel="noreferrer" style={{display: "inline-block"}} >
                        <div className="btn btn-outline-primary">More Projects</div>
                    </a>
                </div>
            </Slide>
            <div className="tab-text">

            </div>
        </div>
    )
}