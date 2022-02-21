import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";


export const ExperienceForm = (props) => {

    let navigate = useNavigate();

    const location = useLocation();
    const  data  = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        name: '',
        description: '',
        price: null,
        duration: '',
        accessibility: '',
        tags: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.addExperience(datos)
            .then(() => navigate("/"))
    }


    return (

        <section className="form-section">
            <div className="form-wrapper">
                <h1>{ data ? 'Editar experiencia' : 'Nueva experiencia'}</h1>
                <div className="form-container">
                    <form className="edit-form" onSubmit={enviarDatos} action="">

                        <div className="form-group">
                            <label htmlFor="">Nombre de la experiencia</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="name"
                                   value={datos.name}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <textarea value={datos.description}
                                      name="description" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio p/p</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="price"
                                   value={datos.price}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Duración</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="duration"
                                   value={datos.duration}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Accesibilidad</label>
                            <textarea value={datos.accessibility}
                                      name="accessibility" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Tags</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   value={datos.tags}
                                   name="tags"/>
                        </div>


                        <div className="btn-edit-container">
                            <button type="submit" className="btn-edit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>

    );
}


