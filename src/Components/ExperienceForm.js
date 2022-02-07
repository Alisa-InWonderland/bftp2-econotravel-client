import React, {Fragment, useState, useEffect} from 'react';


export const ExperienceForm = (props) => {

    const [datos, setDatos] = useState({
        name: '',
        description: '',
        price:'',
        duration:'',
        accessibility:'',
        tags:''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
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

                <div className="col-md-3">
                    <input type="text"
                           placeholder="Título"
                           className="form-control"
                           onChange={handleInputChange}
                           name="name"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Descripción"
                           className="form-control"
                           onChange={handleInputChange}
                           name="description"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Precio p/p"
                           className="form-control"
                           onChange={handleInputChange}

                           name="price"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Duración"
                           className="form-control"
                           onChange={handleInputChange}

                           name="duration"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Accesibilidad"
                           className="form-control"
                           onChange={handleInputChange}

                           name="accessibility"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Etiquetas"
                           className="form-control"
                           onChange={handleInputChange}

                           name="tags"/>
                </div>


                <div className="card-footer mb-5">
                    <input type="submit" className="boton-edit" value="Guardar"/>
                </div>
            </form>
        </Fragment>
            );
}


