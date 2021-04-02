import React from 'react';
import Project from '../project/Project';
import './Design.css'

export default function Design() {
    return (
        <div className="projectPage">
            <div className="projectWrap">
                <Project 
                link="https://petearmitage.medium.com/screentime-app-bc099e27b4c0" 
                image="/projectImages/Screentime hover.png" 
                title="SCREENTIME" 
                descriptionLineOne="Researched and created an iOS design system"
                descriptionLineTwo="with Carolin Kunstwadl."
                tags="︎UX research • UI design"
                />

                <Project 
                link="https://petearmitage.medium.com/add-a-feature-87b1cc8c021f" 
                image="/projectImages/zalando image new 2.png" 
                title="ZALANDO" 
                descriptionLineOne="Added an ‘ask a friend’ function to"
                descriptionLineTwo="the e-commerce platform’s iOS app."
                tags="UX research • iOS redesign • Concept"
                />

                <Project 
                link="https://petearmitage.medium.com/i-need-a-music-studio-807207728e97" 
                image="/projectImages/MUSIC STUDIO FINAO╠ê 1.png" 
                title="I NEED A MUSIC STUDIO" 
                descriptionLineOne="Researched and designed a desktop music studio"
                descriptionLineTwo="aggregate platform."
                tags="︎UX research • Website Design • Concept"
                />

                <Project 
                link="https://petearmitage.medium.com/the-chariot-8d50a73c6027" 
                image="/projectImages/The Chariot.png" 
                title="THE CHARIOT" 
                descriptionLineOne="Researched and designed an online"
                descriptionLineTwo="editorial platform with Julius Kopf."
                tags="︎UX research • Website Design • Prototyping"
                />

            </div>

            <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
