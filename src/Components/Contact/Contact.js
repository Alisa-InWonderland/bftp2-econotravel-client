import React from "react";
import {Routes, Route} from "react-router-dom";
import "./contact.css"

export const Contact = () => {
    return (
        <section className='contact-page'>
            <div className='contact-info'>
                <div className="contact-card">
                    <h1>Contacto</h1>
                    <p>Teléfono: 93 123 45 67</p>
                    <p>Correo: info@econotravel.com</p>
                    <p>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</p>

                </div>
                <div className='whatsapp'>
                    <a className='linkwp' href='https://api.whatsapp.com/send?phone=34931234567'>Chatea con Nosotros</a>
                </div>
            </div>

            <div>
                <iframe width="600" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Carrer%20dels%20Viatgers,%2028,%2008001%20Barcelona&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
        </section>
    )
        ;
}