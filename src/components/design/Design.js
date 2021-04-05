import React from 'react';
import Project from '../project/Project';
import './Design.css'

export default function Design() {
    return (
        <div className="projectPage">
            <div className="projectWrap">
                <Project 
                link="https://petearmitage.medium.com/screentime-app-bc099e27b4c0" 
                image="https://res.cloudinary.com/dc5skapdx/image/upload/v1617622017/Screentime_hover_blznz8.png" 
                title="SCREENTIME" 
                descriptionLineOne="Researched and created an iOS design system"
                descriptionLineTwo="with Carolin Kunstwadl."
                tags="︎UX research • UI design"
                />

                <Project 
                link="https://petearmitage.medium.com/add-a-feature-87b1cc8c021f" 
                image="https://res.cloudinary.com/dc5skapdx/image/upload/v1617622017/zalando_image_new_2_if27bf.png" 
                title="ZALANDO" 
                descriptionLineOne="Added an ‘ask a friend’ function to"
                descriptionLineTwo="the e-commerce platform’s iOS app."
                tags="UX research • iOS redesign • Concept"
                />

                <Project 
                link="https://petearmitage.medium.com/i-need-a-music-studio-807207728e97" 
                image="https://res.cloudinary.com/dc5skapdx/image/upload/v1617622017/MUSIC_STUDIO_FINAO_%C3%AA_1_xbpbrj.png" 
                title="MUSIC STUDIO" 
                descriptionLineOne="Researched and designed a desktop music studio"
                descriptionLineTwo="aggregate platform."
                tags="︎UX research • Website Design • Concept"
                />

                <Project 
                link="https://petearmitage.medium.com/the-chariot-8d50a73c6027" 
                image="https://res.cloudinary.com/dc5skapdx/image/upload/v1617622017/The_Chariot_puzwyz.png" 
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
