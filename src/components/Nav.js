import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
    return (
        <>
            <ul className="nav nav-pills nav-justified border-bottom">
                <li className="nav-item ">
                    <Link to="/" className="nav-link rounded-0">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/history" className="nav-link rounded-0">History</Link>
                </li>  
                <li className="nav-item">
                    <Link to="/myths" className="nav-link rounded-0">Myths</Link>
                </li> 
                <li className="nav-item">
                    <Link to="/gallery" className="nav-link rounded-0">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/form" className="nav-link rounded-0">Form</Link>
                </li>
               
            </ul>
        </>
    )
}