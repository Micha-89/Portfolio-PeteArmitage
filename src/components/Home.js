import React from 'react';
import '../styles/Home.css';


export default function Home() {
    return (
        <div className="home">
            <div className="homeWrapper">
                <h1><span style={{textDecoration:"line-through"}}>Pete is</span> <em>I am</em> a designer and an artist who is deeply in love with storytelling.</h1>
                <div className="homeLine"></div>
                <p className="homeShortBio">I do UX design, content strategy and art direction.<br/>
                Currently I am available for freelance work.</p>
                <ul className="profileLinkList">
                    <a href="https://www.linkedin.com/in/pete-armitage1/" target="_blank" rel='noreferrer noopener'><img src="/akar-icons_linkedin-fill.svg" alt="linkedin"/></a>
                    <a href="https://www.instagram.com/peopleclub/?hl=en" target="_blank" rel='noreferrer noopener'><img src="/bx_bxl-instagram-alt.svg" alt="instagram"/></a>
                </ul>
                <img className="homeImage" src="https://res.cloudinary.com/dc5skapdx/image/upload/v1616506857/Profile_photo_awu3du.jpg" alt="Pete"/>
            </div>
        </div>
    )
}
