import React from "react";
import {useEffect, useState} from "react";
import Montseny from '../assets/Montseny.png';


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
                                <img className="image" src={Montseny} alt="viaje" />
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


                                    <tr className='btn-orange'>
                                        <td>
                                        <a className="btn-orange-link" href="#">Editar</a>
                                        </td>
                                        <td>
                                            <a className="btn-orange-link" onClick={() => deleteExperience(experience.id)}>Borrar</a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>)}

                </div>
            </div>
        );
    }





