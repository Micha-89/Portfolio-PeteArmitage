import React from 'react';
import './Home.css';


export default function Home() {
    return (
        <div className="home">

         

            <div className="homeWrapper">
                <h1><span style={{textDecoration:"line-through"}}>Pete is</span> <em>I am</em> a designer and an artist who is deeply in love with storytelling.</h1>
                <div className="homeLine"></div>
                <p className="homeShortBio">I do UX design, content strategy and art direction.<br/>
                Currently I am available for freelance work.</p>
                <a className="ctaLink" href="mailto:peterarmitage1357@gmail.com">get in touch</a>
                <ul className="profileLinkList">
                    <a href="https://www.linkedin.com/in/pete-armitage1/" target="_blank" rel='noreferrer noopener'><img src="/akar-icons_linkedin-fill.svg" alt="linkedin"/></a>
                    <a href="https://twitter.com/petearmitage3" target="_blank" rel='noreferrer noopener'><img src="/twitter.svg" alt="twitter"/></a>
                    <a href="https://www.instagram.com/peopleclub/?hl=en" target="_blank" rel='noreferrer noopener'><img src="/bx_bxl-instagram-alt.svg" alt="instagram"/></a>
                </ul>
                <img className="homeImage" src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624676/Profile_photo_2_sozqs9.png" alt="Pete"/>
            </div>
           
                <svg style={{marginTop:"37px", marginBottom:"8px"}} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#C4C4C4"/>
                </svg>

                <svg width="2" height="103" viewBox="0 0 2 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 102.001L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <p className="brands">Some brands I have worked with</p>

                <div className="brandLogoWrap">
                    <a href="https://iemusic.co.uk/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624822/ie_music_sog0jm.png" alt="ie music"/></a>

                    <a href="https://www.crashrecords.co.uk/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624822/crash_records_ghohd1.png" alt="crach records"/></a>

                    <a href="https://www.guitarcenter.com/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624821/guitar_center_wwoqov.png" alt="guitar center"/></a>

                    <a style={{marginLeft:"0"}} href="https://www.kissyourears.com/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624822/kiss_your_ears_klw4ay.png" alt="kiss your ears"/></a>

                    <a href="https://www.azzurrigroup.co.uk/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624821/Azzurri_Group_lpbpr3.png" alt="azzuri group"/></a>

                    <a href="https://salamisocialclub.de/" target="_blank" rel='noreferrer noopener'><img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624821/Salami_Social_Club_rs6igg.png" alt="salami social club"/></a>
                </div>

                <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
