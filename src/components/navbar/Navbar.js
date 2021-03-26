import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <Link className="navbarLink" to='/'>Pete Armitage</Link>
                <ul className="navbarLinkList">
                    <Link className="navbarLink" to='/design'>Design</Link>
                    <Link className="navbarLink" to='/writing'>Writing</Link>
                    <Link className="navbarLink" to='/music'>Music</Link>
                    <Link className="navbarLink" to='/about'>About</Link>
                </ul>
            </div>
        </div>
    )
}
