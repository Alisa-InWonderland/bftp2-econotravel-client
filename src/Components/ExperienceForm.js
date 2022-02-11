import React, {Fragment, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";


export const ExperienceForm = (props) => {

    let navigate = useNavigate();

    const [datos, setDatos] = useState(props.edit ? props.edit.value : {
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
        <main>
            <section className="form-section">
                {props.edit ? (
                    <>
                        <h1>Editar Nueva Experiencia</h1>
                        <div className="form-container">
                            <form className="edit-form" onSubmit={enviarDatos}>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Título"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           name="name"
                                           value={props.datos.name}/>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Descripción"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           name="description"
                                           value={props.datos.description}/>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Precio p/p"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           name="price"
                                           value={props.datos.price}/>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Duración"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           name="duration"
                                           value={props.datos.duration}/>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Accesibilidad"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           name="accessibility"
                                           value={props.datos.accessibility}/>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           placeholder="Etiquetas"
                                           className="form-control"
                                           onChange={handleInputChange}
                                           value={props.datos.tags}
                                           name="tags"/>
                                </div>


                                <div className="btn-edit-container">
                                    <button type="submit" className="btn-edit">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Añadir nueva experiencia</h1>
                        <div className="form-container">
                            <form className="add-form" onSubmit={enviarDatos}>
                                <div className="col-md-3">
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
                                           name="tags"
                                           value={datos.tags}/>
                                </div>


                                <div className="btn-add-container">
                                    <button type="submit" className="btn-add"> Add Experience</button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}


