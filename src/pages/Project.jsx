export const Project = (props) => {
    console.log(props)
    return(
        <div className="project">
            <a href={props.href} alt="Demo" target="_blank" rel="noreferrer" className="clean-link">
                <h4 className="my-2 mx-3"><i className="fas fa-project-diagram fa-xs"></i> {props.project}</h4>
                <p className="my-1 mx-2">{props.description}</p>

                <div className="row px-4 py-1" style={{justifyContent: "flex-start"}}>
                    <h6 className="ml-1 mr-3 mt-3" style={{alignSelf: "center;", fortWeight:"bold;"}}>
                        Created on: {props.created}
                    </h6>
                    <div className="project-img">
                        {props.Img1 ? props.Img1 : null}
                    </div>
                    <div className="project-img">
                        {props.Img2 ? props.Img2: null}
                    </div>
                    <div className="project-img">
                        {props.Img3 ? props.Img3: null}
                    </div>
                    <div className="project-img">
                        {props.Img4 ? props.Img4: null}
                    </div>
                </div>
            </a>
        </div>
    )
}