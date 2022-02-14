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
        props.addExperience(datos).then(() => navigate("/"))
        console.log(datos.name + ' ' + datos.description + ' ' + datos.price + ' ' + datos.duration + ' ' + datos.accessibility + ' ' + datos.tags + ' ')
    }


    return (

        <section className="form-section">
            <div className="form-wrapper">
                <h1>{ data ? 'Editar experiencia' : 'Nueva experiencia'}</h1>
                <div className="form-container">
                    <form className="edit-form" onSubmit={enviarDatos} action="">

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Título"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="name"
                                   value={datos.name}/>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Descripción"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="description"
                                   value={datos.description}/>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Precio p/p"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="price"
                                   value={datos.price}/>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Duración"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="duration"
                                   value={datos.duration}/>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Accesibilidad"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="accessibility"
                                   value={datos.accessibility}/>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   placeholder="Etiquetas"
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


