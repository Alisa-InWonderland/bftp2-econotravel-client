import React from "react";
import logoEconotravel from '../assets/logoEconotravel.png';

export const TopNavBar = () => {
    return (
        <nav className="topNavBar">
            <div className="topNavBar-brand">
                <a href="#">
                    <img className={"logoImg"} src={logoEconotravel} alt={"Econotravel logo"}/>
                </a>
            </div>
            <ul className="topNavBar-links">
                <li className="nav-item">
                    <a className="nav-link" href="#">Reserva</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Quiénes somos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contactos</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Log in</a>
                </li>
            </ul>

        </nav>
    );
}