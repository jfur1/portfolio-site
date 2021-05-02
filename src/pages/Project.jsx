export const Project = (props) => {

    return(
        <div className="project">
            <h3>{props.project}</h3>
            <p>{props.description}</p>
            <h6>Created on: {props.created}</h6>
        </div>
    )
}