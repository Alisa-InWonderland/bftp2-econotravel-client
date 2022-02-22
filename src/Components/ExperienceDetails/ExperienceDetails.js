import React from "react";
import {Link} from "react-router-dom";

export const ExperienceDetails = () => {

    return (
        <div className="details-container">
            <div>
                <img src="#" className="image" alt="Image of Experience"/>
            </div>

            <table className="experience-table">
                <tbody>

                <tr>
                    <td>experience.name</td>
                    <td>experience.price '€'</td>
                </tr>

                <tr className='duration'>
                    <td>experience.duration</td>
                </tr>


                <tr className='btn-card-container'>
                    <td>
                        <button className="btn-orange editar">
                            <Link className="btn-orange-link" to="/add">Editar</Link>
                        </button>
                    </td>
                    <td>
                        <button className="btn-orange borrar"><a className="btn-orange-link">Borrar</a>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}