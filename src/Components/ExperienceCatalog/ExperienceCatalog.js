import React from "react";
import {CallToAction} from "../CallToAction";
import "./experienceCatalog.css"
import {ExperienceCard} from "../ExperienceCard/ExperienceCard";




export function ExperienceCatalog({experiences, deleteExperience}) {

    return (
        <>
             <CallToAction />

             <section className='experienceCatalog'>
                 <h1 className="catalog-title">Nuestras experiencias</h1>
                 <div className="container-card">
                    <ExperienceCard experiences={experiences}
                                    deleteExperience={deleteExperience}/>
                 </div>
             </section>
        </>
    );

}

