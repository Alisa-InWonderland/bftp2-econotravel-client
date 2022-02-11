import React from "react";
import logoEconotravel from '../assets/logoEconotravel1.png';
import {Link} from "react-router-dom";

export const TopNavBar = () => {
    return (
        <nav className="topNavBar">
            <Link to="/">
                <div className="topNavBar-brand">
                        <img className="logoImg" src={logoEconotravel} alt={"Econotravel logo"}/>
                </div>

            </Link>
            <ul className="topNavBar-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/reserva">Reserva</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">Quienes somos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Añadir Experiencia</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link login" to="/login">Log in</Link>
                </li>
            </ul>


        </nav>
    )
        ;
}