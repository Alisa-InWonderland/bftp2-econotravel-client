import React from "react";
import {Link, useParams} from "react-router-dom";
import {getExperienceById} from "../../services/getExperienceById";
import {useEffect, useState} from "react";
import "./ExperienceDetails.css";
import mountains from "../../assets/mountains_sun_icon.png";
import mountainBbike from "../../assets/mountain-bike.png";


export const ExperienceDetails = () => {

    const [experience, setExperience] = useState();
    const params = useParams();

    useEffect(() => {

        getExperienceById(params.id)
            .then(setExperience)
    }, [params.id])


    return (
        <div className="page-wrapping">
            {experience && (
                <div className="details-card">
                    <div className="details-img-container">
                        <img className="details-img" src={experience.image} alt="Imagen Experiencia"/>
                        <span className="price">{experience.price}€</span>
                    </div>
                    <div className="details-text-box">
                        <div className="title">
                            <h1>{experience.name}</h1>
                        </div>
                        <div className="text">
                            <div className="description">
                                <p className="description-title">{experience.description}</p>
                            </div>
                            <div className="type-and-a11y">
                                <div className="type-container">
                                    <div className="e-place">
                                        <span id="place-type">Tipo</span>
                                        <img id="place-icon" src={mountains} alt="place icon"/>
                                        <span id="place-name">Montaña</span>
                                    </div>
                                    <div className="e-duration">
                                        <span id="duration">Duración</span>
                                        <span id="duration-time">{experience.duration}</span>
                                        <span id="duration-length">Media</span>
                                    </div>
                                    <div className="e-transport">
                                        <span id="transport">Transporte</span>
                                        <img id="transport-icon" src={mountainBbike} alt="transport icon"/>
                                        <span id="transport-name">Bus</span>
                                    </div>
                                </div>
                                <div className="a11y-container">
                                    <span className="a11y-name">Accessibilidad:</span>
                                    <span className="a11y-description">{experience.accessibility}</span>
                                </div>
                                <button className="btn-reservation">
                                    <Link className="btn-orange-link" to="/reserve">Reservar</Link>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}