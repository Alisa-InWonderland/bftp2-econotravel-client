import React from "react";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import "./footer.css"
import {Link} from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="bottomNavBar-container">
                <nav className="bottomNavBar">

                    <div className="bottomNavBar-brand">
                        <h3><a href="#">Econotravel</a></h3>
                        <p>Book your trip </p>
                    </div>

                    <ul className="bottomNavBar-links">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Experiencias</Link>
                        </li>
                    </ul>

                    <div className="social">
                        <a href="#">
                            <img className={"icono-rs"} src={twitter} alt={"Twitter logo"}/>
                        </a>

                        <a href="#">
                            <img className={"icono-rs"} src={instagram} alt={"Econotravel logo"}/>
                        </a>

                        <a href="#">
                            <img className={"icono-rs"} src={facebook} alt={"Econotravel logo"}/>
                        </a>
                    </div>

                </nav>

                <p className='copyright'>All rights reserved</p>
            </div>
        </footer>
    );
}