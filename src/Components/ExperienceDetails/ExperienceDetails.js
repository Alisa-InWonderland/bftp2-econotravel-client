import React from "react";
import {Link, useParams} from "react-router-dom";
import {getExperienceById} from "../../services/getExperienceById";
import {useEffect, useState} from "react";
import "./ExperienceDetails.css";


export const ExperienceDetails = () => {

    const [experience, setExperience] = useState();
    const params = useParams();

    useEffect(() => {

        getExperienceById(params.id)
                .then(setExperience)
    }, [params.id])


    function payExperience({pago}) {

        const {payment} = pago;

    }


    return (
      <>
      {experience && (
        <div className="details-card">
            <div className="details-img-container">
                <img className="details-img" src={experience.image} alt="Imagen Experiencia" />
                <span className="price">{experience.price}€</span>
            </div>
            <h1 className="title">{experience.name}</h1>
            <p className="description">{experience.description}</p>
            <div className="type-container">
                <div className="e-place">
                    <span id="place-type">Tipo</span>
                    <img id="place-icon" src="" alt="place icon" />
                    <span id="place-name">Montaña</span>
                </div>
                <div className="e-duration">
                    <span id="duration">Duración</span>
                    <span id="duration-time">{experience.duration}</span>
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
                <span className="a11y-description">{experience.accessibility}</span>
            </div>
            <button className="btn-reservation">
                <Link className="btn-orange-link" to="/reserve">Reservar</Link>
            </button>
            <button className="btn-orange borrar"><a className="btn-orange-link"
                                                     onClick={() => payExperience(experience.payment)}>Pagar</a>
            </button>
        </div>
          

        )}
        </>
)
}