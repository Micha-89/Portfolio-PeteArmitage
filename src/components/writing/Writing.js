import React from 'react';
import './Writing.css';
import Article from '../article/Article'

export default function Writing() {
    return (
        <div className="articlePage">
            <div className="articleWrap">
                <Article link="#" image="/writingImages/Social media toxicity 1.png" description="How Social Media is destroying your mind. An artist’s perspective."/>

                <Article link="#" image="/writingImages/vinyl 2.png" description="Why are we still using vinyl?  Five cons of buying wax..."/>

                <Article link="#" image="/writingImages/dj.svg" description="How might new clubs stand the test of time in five or ten years?"/>

                <Article link="#" image="/writingImages/diverse taste music 2-1.png" description="Why a diverse taste in music is good for you."/>
            </div>

            <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
