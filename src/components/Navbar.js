import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <p className="navbarName">Pete Armitage</p>
                <ul className="navbarLinkList">
                    <Link className="navbarLink">Design</Link>
                    <Link className="navbarLink">Writing</Link>
                    <Link className="navbarLink">Art</Link>
                    <Link className="navbarLink">Contact</Link>
                </ul>
            </div>
        </div>
    )
}
