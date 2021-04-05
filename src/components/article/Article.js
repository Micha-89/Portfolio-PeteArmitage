import React from 'react';
import './Article.css';

export default function Article(props) {
    return (
        <div className="boxArticle">
            <img src={props.image} alt="article"/>
            <div className="articleInfoBox">
                <em>{props.descriptionLineOne}<br/>{props.descriptionLineTwo}</em>
                <a href={props.link} target="_blank" rel='noreferrer noopener'>read piece</a>
            </div>
        </div>
    )
}
