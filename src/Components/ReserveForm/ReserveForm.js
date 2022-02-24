import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import backgreserve from '../../assets/backgreserve.png';
import "./reserveForm.css"
import * as emailjs from "@emailjs/browser";

export const ReserveForm = (props) => {
    let navigate = useNavigate();
    const form = useRef();
    const [reserveData, setReserveData] = useState({
        nombre: '',
        telefono: '',
        adultos: null,
        ninos: null,
        email: '',
        experiencia: '',
        comentarios: '',
    })

    const handleInputChange = (event) => {
        setReserveData({
            ...reserveData,
            [event.target.name]: event.target.value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        props.sendReserve(reserveData)
        emailjs.sendForm('service_orz3jlf', 'template_3e5z9z3', form.current, 'user_KWCIEUHdPjNS6IJDtZgMa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        navigate("/")
    };


    return (
        <div className='section-form' style={{backgroundImage: `url(${backgreserve})`}}>
            <section className="form-section">
                <div className="form-wrapper">

                    <h1>Reservar Experiencia</h1>
                    <div className="form-container">
                        <form ref={form} className="edit-form" onSubmit={sendEmail} action="">

                            <div className="form-group">
                                <label htmlFor="">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       onChange={handleInputChange}
                                       name="nombre"
                                       value={reserveData.nombre}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Teléfono</label>
                                <input type="text"
                                       className="form-control"
                                       onChange={handleInputChange}
                                       name="telefono"
                                       value={reserveData.telefono}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Adultos</label>
                                <input type="number"
                                       className="form-control"
                                       onChange={handleInputChange}
                                       name="adultos"
                                       value={reserveData.adultos}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Niños</label>
                                <input type="number"
                                       className="form-control"
                                       onChange={handleInputChange}
                                       name="ninos"
                                       value={reserveData.ninos}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                       className="form-control"
                                       onChange={handleInputChange}
                                       name="email"
                                       value={reserveData.email}/>
                            </div>

                            <div className="form-group">Elige la Experienca
                                <select htmlFor="experience" name="experience">
                                    <option value="Paseo en bicicleta por el Montseny">Paseo en bicicleta por el
                                        Montseny
                                    </option>
                                    <option value="Descubre la costa en barco de vela">Descubre la costa en barco de
                                        vela
                                    </option>
                                    <option value="Descubre la Barcelona Modernista de noche">Descubre la Barcelona
                                        Modernista de noche
                                    </option>
                                    <option value="Del huerto a la mesa">Del huerto a la mesa</option>
                                    <option value="Arte en la montaña sagrada">Arte en la montaña sagrada</option>
                                    <option value="VALL DE NÚRIA: Un valle único">VALL DE NÚRIA: Un valle único</option>
                                </select>
                            </div>


                            <div className="form-group">
                                <label htmlFor="">Comentarios</label>
                                <textarea value={reserveData.comentarios} name="comentarios" id="" cols="50" rows="5"
                                          className="form-control"
                                          onChange={handleInputChange}/>
                            </div>


                            <div className="btn-edit-container">
                                <button type="submit" className="btn-edit"><a className="btn-orange-link" href="https://buy.stripe.com/5kAaGC3bKaFB80MaEH" target="_blank">Reservar y Pagar</a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}
