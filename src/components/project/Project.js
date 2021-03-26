import React from 'react';
import './Project.css';

export default function Project(props) {
    return (
        <div className="hoverBox">
            <a href={props.link} className="projectBox" target="_blank" rel='noreferrer noopener'>
                <img src={props.image} alt="project"/>
                <p>{props.title}</p>
                <em>{props.subtitle}</em>
            </a>  
        </div>
    )
}
