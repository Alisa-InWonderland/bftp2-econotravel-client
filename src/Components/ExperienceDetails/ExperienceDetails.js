import React from "react";
import {Link} from "react-router-dom";

export const ExperienceDetails = () => {

    return (
        <div className="details-card">
            <div className="details-img-container">
                <img className="details-img" src="" alt="Imagen Experiencia" />
                <span className="price">200 €</span>
            </div>
            <h1 className="title">Title of Experience</h1>
            <p className="description">Description de la experiencia
                más extensiva, serán uno o
                dos párrafos... Lorem ipsum lorem ipsum escription de la experiencia
                más extensiva, serán uno o
                dos párrafos... Lorem ipsum lorem ipsum</p>
            <div className="type-container">
                <div className="e-place">
                    <span id="place-type">Tipo</span>
                    <img id="place-icon" src="" alt="place icon" />
                    <span id="place-name">Montaña</span>
                </div>
                <div className="e-duration">
                    <span id="duration">Duración</span>
                    <span id="duration-time">4h</span>
                    <span id="duration-length">larga</span>
                </div>
                <div className="e-transport">
                    <span id="transport">Transporte</span>
                    <img id="transport-icon" src="" alt="transport icon" />
                    <span id="transport-name">Bicicleta</span>
                </div>
            </div>
            <div className="a11y-container">
                <span className="a11y-name">Accessibilidad:</span>
                <span className="a11y-description"></span>
            </div>
            <button className="btn-reservation">Reservar!</button>
        </div>
    )
}