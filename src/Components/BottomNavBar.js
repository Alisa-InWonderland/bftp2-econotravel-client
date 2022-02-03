import React from "react";
import twitter from "../assets/twitter.png";


export const BottomNavBar = () => {
    return (
        <div className="bottomNavBar-container">
            <nav className="bottomNavBar">

                <div className="bottomNavBar-brand">
                    <h3><a href="#">Econotravel</a></h3>
                    <p>Book your trip </p>
                </div>

                <ul className="bottomNavBar-links">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contactos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experiencias</a>
                    </li>
                </ul>

                <div className="social">
                    <a href="#">
                        <img className={"icono-rs"} src={twitter} alt={"Econotravel logo"}/>
                    </a>

                    <a href="#">
                        <img className={"icono-rs"} src={twitter} alt={"Econotravel logo"}/>
                    </a>

                    <a href="#">
                        <img className={"icono-rs"} src={twitter} alt={"Econotravel logo"}/>
                    </a>
                </div>

            </nav>

            <p className='copyright'>All rights reserved</p>
        </div>
    );
}