import React from 'react';
import './Music.css';

export default function Music() {
    return (
        <div className="musicVideoWrap">
            <iframe src="https://www.youtube.com/embed/VAFRU7O1JGM?wmode=opaque&amp;enablejsapi=1" height="480" width="888" scrolling="no" frameborder="0"></iframe>

            <iframe src="https://www.youtube.com/embed/tKBsp7f9PPo?wmode=opaque&amp;enablejsapi=1" height="480" width="888" scrolling="no" frameborder="0"></iframe>

            <iframe src="https://www.youtube.com/embed/KcywwiCsQ-E?wmode=opaque&amp;enablejsapi=1" height="480" width="888" scrolling="no" frameborder="0"></iframe>

            <iframe src="https://www.youtube.com/embed/zY7t7h6DiDc?wmode=opaque&amp;enablejsapi=1" height="480" width="888" scrolling="no" frameborder="0"></iframe>

            <iframe src="https://www.youtube.com/embed/aEjOeLKqzcg?wmode=opaque&amp;enablejsapi=1" height="480" width="888" scrolling="no" frameborder="0"></iframe>

            <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}
