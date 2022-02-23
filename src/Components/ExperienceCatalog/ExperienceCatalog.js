import React from "react";
import {CallToAction} from "../CallToAction";
import "./experienceCatalog.css"
import {ExperienceCard} from "../ExperienceCard/ExperienceCard";

export function ExperienceCatalog({experiences, deleteExperience}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    return (
        <>
            <CallToAction/>

            <section className='experienceCatalog'>

                <h1 className="catalog-title">Nuestras experiencias</h1>

                <div className="barra-de-busqueda-container">
                    {/*<label htmlFor="experience"></label>*/}
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
                                                   deleteExperience={deleteExperience}/>;
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

