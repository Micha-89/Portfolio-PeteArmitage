import React from 'react';
import './Article.css';

export default function Article(props) {
    return (
        <div className="hoverBoxArticle">
            <a href={props.link} className="articleBox" target="_blank" rel='noreferrer noopener'>
                <img src={props.image} alt="article"/>
                <em>{props.description}</em>
            </a>  
        </div>
    )
}
