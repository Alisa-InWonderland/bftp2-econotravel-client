import React from "react";
import fundadora from "../../assets/fundadora.png";
import "./about.css"

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="mission-container">
                    <div className="mission-text-container">
                        <header className="statement">Econotravel: Experiencias en el área de Barcelona</header>
                        <h1 className="about-title">- Quiénes somos -</h1>
                        <p className="mission-text">Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora,
                            Marina
                            Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo,
                            descubrió que
                            las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de
                            transportes
                            contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que
                            causaba un
                            progresivo deterioro de los increíbles parajes naturales de Cataluña.</p>
                        <br/>
                        <p className="mission-text" id="paragr-2">Preocupada por la falta de alternativas eco-friendly,
                            Marina se propuso
                            fundar una agencia de
                            experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así
                            nació
                            Econotravel Barcelona.</p>
                    </div>
                    <div className="fundadora">
                        <img className="fundadora-img" src={fundadora} alt={"Portrait de la fundadora"}/>
                        <br/>
                        <span className="fundadora-name">Marina Herrán, fundadora de Econotravel</span>
                    </div>
                </div>

            </div>
        </div>
    );
}