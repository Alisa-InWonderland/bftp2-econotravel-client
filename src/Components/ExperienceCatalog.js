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


        return (
            <div className='experienceCatalog'>

                <h1 className="catalog-title">Nuestras experiencias</h1>

                <div className="container-card">

                    {experiences.map(experience =>

                    <div className="game-card">
                            <div>
                                <img className="image" src={Montseny} alt="viaje" />
                            </div>

                            <table className="games-table">
                                <tbody>

                                    <tr>
                                        <td>{experience.name}</td>
                                        <td>Price</td>
                                    </tr>

                                    <tr className='duration'>
                                        <td>2 días</td>
                                    </tr>


                                    <tr className='btn-orange'>
                                        <td>
                                        <a className="btn-orange-link" href="#">Reservar</a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>)}

                </div>
            </div>
        );
    }





