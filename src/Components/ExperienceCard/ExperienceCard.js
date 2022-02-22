import React from "react";
import {Link} from "react-router-dom";
import "../ExperienceCatalog/experienceCatalog.css"



export function ExperienceCard({experiences, deleteExperience}) {


    return (
        <>
                    {experiences.map((experience) =>

                        <div className="experience-card">
                            <div>
                                <Link to="/detail">
                                <img src={experience.image} className="image" alt="Image of Experience"/>
                                </Link>
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
                                        <button className="btn-orange editar">
                                            <Link className="btn-orange-link" to="/add" state={{ data: experience}}>Editar</Link>
                                        </button>
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
                    )}
        </>
    );

}

