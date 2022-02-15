import React from "react";
import {Link} from "react-router-dom";

export const ExperienceDetails = () => {
    return (
        <div className="details-container">
            <div>
                <img src={experience.image} className="image" alt="Image of Experience"/>
            </div>

            <table className="experience-table">
                <tbody>

                <tr>
                    <td>{experience.name}</td>
                    <td>{experience.price}{'€'}</td>
                </tr>

                <tr className='duration'>
                    <td>{experience.duration}</td>
                </tr>


                <tr className='btn-card-container'>
                    <td>
                        <button className="btn-orange editar"><a className="btn-orange-link"
                                                                 onClick={() => editExperience(experience)}>
                            <Link to="/add">Editar</Link>
                        </a></button>
                    </td>
                    <td>
                        <button className="btn-orange borrar"><a className="btn-orange-link"
                                                                 onClick={() => deleteExperience(experience.id)}>Borrar</a>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}