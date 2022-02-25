import React from "react";
import {Hero} from "../Hero/Hero";
import "./experienceCatalog.css"
import {ExperienceCard} from "../ExperienceCard/ExperienceCard";
import lupa from "../../assets/lupa.png";
import backgreserve from "../../assets/backgreserve.png";


export function ExperienceCatalog({experiences, deleteExperience, loggedIn}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    return (
        <>
            <Hero/>

            <section className='experienceCatalog'>

                <h1 className="catalog-title">Nuestras experiencias</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="experience"
                        type="text"
                        onChange={getData}
                        placeholder="Busca una experiencia"
                    />

                </div>

                <div className="container-card">
                    {experiences.map((experience) => {
                        if (
                            experience.name.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ExperienceCard key={experience.id} experience={experience}
                                                   deleteExperience={deleteExperience} loggedIn={loggedIn}/>;
                        }
                        if (
                            experience.duration.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ExperienceCard key={experience.id} experience={experience}
                                                   deleteExperience={deleteExperience}/>;
                        }

                        return "";
                    })}
                </div>

            </section>
        </>
    );
}

