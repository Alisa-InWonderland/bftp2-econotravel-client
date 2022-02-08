import React from "react";
import logoEconotravel from '../assets/logoEconotravel1.png';
import {Link} from "react-router-dom";

export const TopNavBar = () => {
    return (
        <nav className="topNavBar">
            <div className="topNavBar-brand">
                <a href="#">
                    <img className="logoImg" src={logoEconotravel} alt={"Econotravel logo"}/>
                </a>
            </div>
            <Link to="/reserva">Reserva</Link>
            <Link to="/about">Quienes somos</Link>
            <Link to="/contacto">Contacto</Link>

            <Link to="/add">Añadir Experiencia</Link>

            <Link to="/login">Log in</Link>
        </nav>
    );
}