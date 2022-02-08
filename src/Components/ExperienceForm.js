import React, {Fragment, useState, useEffect} from 'react';


export const ExperienceForm = (props) => {

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
        props.onSubmit(datos)
        console.log(datos.name + ' ' + datos.description + ' ' + datos.price + ' ' + datos.duration + ' ' + datos.accessibility + ' ' + datos.tags + ' ')
    }


    return (
        <Fragment>
            <h1>Añadir Nueva Experiencia</h1>
            <form className="row edit-form" onSubmit={enviarDatos}>
                {props.edit ? (
                    <>
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
                                   value={datos.tags}
                                   name="tags"/>
                        </div>


                        <div className="card-footer mb-5">
                            <input type="submit" className="boton-edit" value="Guardar"/>
                        </div>

                    </>
                ) : (
                    <>
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


                        <div className="card-footer mb-5">
                            <input type="submit" className="boton-edit" value="Añadir Nuevo"/>
                        </div>

                    </>

                )}
            < /form>
        </Fragment>
    );
}


