import React from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export function ExperienceCatalog() {

    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE'
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className='experienceCatalog'>


            <h1 className="catalog-title">Nuestras experiencias</h1>

            <div className="container-card">

                {experiences.map(experience =>

                    <div className="experience-card">
                        <div>
                            <img src={experience.image} className="image"></img>
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
                                                                             href="#">
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
                    </div>)}

            </div>
        </div>
    );
}

