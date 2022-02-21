import React from "react";
import {Link} from "react-router-dom";
import {CallToAction} from "../CallToAction";
import "./experienceCatalog.css"



export function ExperienceCatalog({experiences, deleteExperience}) {


    return (
        <>
                <CallToAction />

                <section className='experienceCatalog'>

                    <h1 className="catalog-title">Nuestras experiencias</h1>

                    <div className="container-card">

                        {experiences.map(experience =>

                            <div className="experience-card">
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
                    </div>
                </section>
    </>
    );

}

