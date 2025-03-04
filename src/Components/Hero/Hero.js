import React from "react";
import Image from "../../assets/ImageNew.png";
import Decore from "../../assets/Decore.png";
import {Link} from "react-router-dom";
import "./hero.css"

export const Hero = () => {
    return (
            <section className="hero">
                <div className="titles">
                    <h6>Los mejores destinos de Cataluña</h6>
                    <h1>Viaja, <span className="title-decore">disfruta</span><br/>
                        y vive nuevas<br/>
                        experiencias</h1>
                    <p>Cómete el mundo con Econotravel y planifica a medida tus fines de semana. Escápate con tu pareja o con la familia, disfruta de un sin fin de experiencias que te esperan. ¡Sonríe, están empezando tus vacaciones!</p>

                    <button className="btn-orange">
                        <Link className="btn-orange-link" to="/reserve">Reservar experiencia</Link>
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
