import React from "react";
import {Link} from "react-router-dom";
import "../ExperienceCatalog/experienceCatalog.css"



export function ExperienceCard({experience, deleteExperience}) {

    const { id, name, image, price, duration, description } = experience;


    return (
        <>
                        <div className="experience-card">
                            <div>
                                <Link to={`/${id}`}>
                                <img src={image} className="image" alt="Image of Experience"/>
                                </Link>
                            </div>

                            <table className="experience-table">
                                <tbody>

                                <tr>
                                    <td>{name}</td>
                                    <td>{price}{'€'}</td>
                                </tr>

                                <tr className='duration'>
                                    <td>{duration}</td>
                                </tr>

                                <tr className='duration' hidden>
                                    <td>{description}</td>
                                </tr>


                                <tr className='btn-card-container'>
                                    {/*{loggedIn ?*/}
                                    {/*    <td>*/}
                                    {/*        <button className="btn-orange editar">*/}
                                    {/*            <Link className="btn-orange-link" to="/reserve">Reservar</Link>*/}
                                    {/*        </button>*/}
                                    {/*    </td>*/}
                                    {/*    :*/}
                                    {/*    <>*/}
                                            <td>
                                                <button className="btn-orange editar">
                                                    <Link className="btn-orange-link" to="/add"
                                                          state={{data: experience}}>Editar</Link>
                                                </button>
                                            </td>
                                            <td>
                                            <button className="btn-orange borrar"><a className="btn-orange-link"
                                            onClick={() => deleteExperience(experience.id)}>Borrar</a>
                                            </button>
                                            </td>
                                    {/*    </>*/}
                                    {/*}*/}
                                </tr>
                                <tr className='reservar'>
                                    <td>
                                    <button className="btn-orange">
                                        <Link className="btn-orange reservar" to="/reserve">Reservar</Link>
                                    </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
        </>
    );

}

