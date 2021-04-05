import React from 'react';
import './Writing.css';
import Article from '../article/Article'

export default function Writing() {
    return (
        <div className="articlePage">
            <div className="articleWrap">

                <Article 
                link="https://petearmitage.medium.com/social-media-toxicity-the-dissolution-of-artistic-integrity-e86cca019ed" 
                image="/writingImages/Social media toxicity 1.png" 
                descriptionLineOne="How social media is destroying"
                descriptionLineTwo="your mind."
                />

                <Article 
                link="https://petearmitage.medium.com/why-are-we-still-using-vinyl-five-cons-of-buying-wax-4156cb8070f3" 
                image="/writingImages/vinyl 2.png" 
                descriptionLineOne="Why are we still using vinyl? "
                descriptionLineTwo="Five cons of buying wax..."
                />

                <Article 
                link="https://petearmitage.medium.com/how-might-new-clubs-stand-the-test-of-time-in-five-or-ten-years-792a12563f04" 
                image="/writingImages/dj.svg" 
                descriptionLineOne="How might new clubs stand the test of time"
                descriptionLineTwo="in five or ten years?"
                />

                <Article 
                link="https://petearmitage.medium.com/having-a-diverse-taste-in-music-is-good-for-you-cd3b02fc9382" 
                image="/writingImages/diverse taste music 2-1.png" 
                descriptionLineOne="Why a diverse taste in music"
                descriptionLineTwo="is good for you."
                />
                
            </div>

            <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
