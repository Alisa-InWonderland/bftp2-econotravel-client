import React from "react";
import Image from "../assets/ImageNew.png";
import Decore from "../assets/Decore.png";

export const CallToAction = () => {
    return (
            <section className="hero">
                <div className="titles">
                    <h6>Los mejores destinos de Cataluña</h6>
                    <h1>Viaja, <span className="title-decore">disfruta</span><br/>
                        y vive nuevas<br/>
                        experiencias</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur<br/>
                        adipisicing elit. Ea excepturi exercitationem<br/>
                        illum, in laborum nostrum.</p>

                    <button className="btn-orange">
                        <a className="btn-orange-link" href="#">Reservar experiencia</a>
                    </button>
                </div>
                <div className="girl-image-container">
                    <img className="girl-image" src={Image} alt={"Foto of a girl"}/>
                    <div className="decoreImg-container">

                        <img className="decoreImg" src={Decore} alt={"Decore"}/>

                    </div>
                </div>
            </section>
    );
}
