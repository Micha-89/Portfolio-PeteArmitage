import React from 'react';
import Project from '../project/Project';
import './Design.css'

export default function Design() {
    return (
        <div className="projectPage">
            <div className="projectWrap">
                <Project link="#" image="/projectImages/Screentime 1.png" title="Screentime" subtitle="Designing an IOS tracking app"/>

                <Project link="#" image="/projectImages/Zalando Project image 2.png" title="Zalando" subtitle="Adding a feature to the iOS app"/>

                <Project link="#" image="/projectImages/i need amusic 2.png" title="I need a music studio" subtitle="Designing a music studio aggregate website"/>

                <Project link="#" image="/projectImages/The Chariot.png" title="The Chariot" subtitle="Creating an online editorial plaform"/>
            </div>

            <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
