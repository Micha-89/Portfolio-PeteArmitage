import React from 'react';
import './About.css'

export default function About() {
    return (
        <div>
            <div className="aboutWrapper">
                <div className="aboutInfoWrapper">
                    <img src="https://res.cloudinary.com/dc5skapdx/image/upload/v1617624745/IMG-8089_2_tiexdl.png" alt="profile photo"/>
                    <div className="aboutTextBox">
                        <h6 className="aboutTextTitle">About me</h6>
                        <p>I’m a Berlin based designer, artist and writer with 6+ years experience in music and marketing.  I’ve worked with a variety of brands, ranging from multinational restaurant groups to tiny record labels.</p>
                        <p>My passion lies in empathising with users by learning about their life stories and what inspires them.</p>
                        <p>Great storytelling doesn’t just happen accidentally, it is designed based on an intimate understanding of the human psyche and the communities we each identify with.</p>
                        <p>By striving to identify personally with users we can create valuable experiences and improve people’s lives.</p>
                        <p>This is what is most important to me - using my creative skills to galvanise positive social change.</p>
                        <p>All my work is underscored by humility and an eagerness to learn and innovate.</p>
                    </div>
                    <div className="skillWrapper">
                        <h5 className="aboutTextTitle">Technical Abilities</h5>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>User Research</li>
                            <li>Website, iOS and Android App Design</li>
                            <li>Wireframing</li>
                        </ul>
                        <h5 className="aboutTextTitle">‘Soft’ Abilities</h5>
                        <ul>
                            <li>Content Strategy</li>
                            <li>Art Direction</li>
                            <li>Brand Identity</li>
                            <li>Copywriting</li>
                        </ul>
                        <a href="/Pete CV April 2021.pdf" download><em>Download CV/Resume</em></a>
                    </div>
                </div>
                <svg style={{margin:"43px 0 8px 0"}} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#C4C4C4"/>
                </svg>

                <svg width="2" height="103" viewBox="0 0 2 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 102.001L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h1 className="aboutTitle"><span style={{textDecoration:"line-through"}}>Pete has</span> <em>I have</em> an unquenchable curiosity about human nature.</h1>

                <a className="ctaLinkAbout" href="mailto:peterarmitage1357@gmail.com">get in touch</a>

                <ul className="profileLinkListAbout">
                    <a href="https://www.linkedin.com/in/pete-armitage1/" target="_blank" rel='noreferrer noopener'><img src="/akar-icons_linkedin-fill.svg" alt="linkedin"/></a>
                    <a href="https://twitter.com/petearmitage3" target="_blank" rel='noreferrer noopener'><img src="/twitter.svg" alt="twitter"/></a>
                    <a href="https://www.instagram.com/peopleclub/?hl=en" target="_blank" rel='noreferrer noopener'><img src="/bx_bxl-instagram-alt.svg" alt="instagram"/></a>
                </ul>

                <p className="copyright">© Pete Armitage 2021</p>
            </div>
        </div>
    )
}

 












 

   

