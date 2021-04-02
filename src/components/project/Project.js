import React from 'react';
import './Project.css';

export default function Project(props) {
    return (
        <div className="hoverBox">
            <img src={props.image} alt="project"/>
            <div className="projectInfo">
                <em>{props.tags}</em>
                <h4>{props.title}</h4>
                <p>{props.descriptionLineOne}<br/>{props.descriptionLineTwo}</p>
                <a href={props.link} target="_blank" rel='noreferrer noopener'>view case study</a>  
            </div>
        </div>
    )
}
