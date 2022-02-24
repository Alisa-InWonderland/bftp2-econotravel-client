import React from "react";
import {Link, useParams} from "react-router-dom";
import {getExperienceById} from "../../services/getExperienceById";
import {useEffect, useState} from "react";

export const ExperienceDetails = () => {

    const [experience, setExperience] = useState();
    const params = useParams();

    useEffect(() => {

        getExperienceById(params.id)
                .then(setExperience)
    }, [params.id])



    return (
        <>
        {experience && (
        <div className="details-container">
            <div>
                <img src={experience.image} className="image" alt="Image of Experience"/>
            </div>

            <table className="experience-table">
                <tbody>

                <tr>
                    <td>{experience.name}</td>
                    <td>{experience.price}€</td>
                </tr>

                <tr className='duration'>
                    <td>{experience.duration}</td>
                </tr>

                <tr className='duration'>
                    <td>{experience.description}</td>
                </tr>

                <tr className='btn-card-container'>
                    <td>
                        <button className="btn-orange editar">
                            <Link className="btn-orange-link" to="/reserve">Reservar</Link>
                        </button>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>

        )}
        </>
)
}