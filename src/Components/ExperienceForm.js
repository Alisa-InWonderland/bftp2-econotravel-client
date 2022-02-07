import React, {Fragment, useState, useEffect} from 'react';


export const ExperienceForm = () => {

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
        console.log(datos.name + ' ' + datos.description + ' ' + datos.price + ' ' + datos.duration + ' ' + datos.accessibility + ' ' + datos.tags + ' ')
    }
    // useEffect(() => {
    //     if (requiresUpdate) {
    //         fetch("http://localhost:8080/api/experiences")
    //             .then(r => r.json())
    //             .then(setExperience)
    //             .then(_ => setRequiresUpdate(false));
    //     }
    // }, [requiresUpdate])
    //
    // const addExperience = (experienceName, experienceDescription, experiencePrice, experienceDuration, experienceAccessibility, experienceTags) => {
    //     fetch("http://localhost:8080/api/experiences",
    //         {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({name: experienceName, description: experienceDescription, price: experiencePrice, duration: experienceDuration, accessibility: experienceAccessibility, tags: experienceTags})
    //         }
    //     ).then(_ => setRequiresUpdate(true))
    //
    // }


    return (
        <Fragment>
            <h1>Añadir Nueva Experiencia</h1>
            <form className="row edit-form" onSubmit={enviarDatos}>

                <div className="col-md-3">
                    <input type="text"
                           placeholder="Título"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="name"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Descripción"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="description"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Precio p/p"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="price"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Duración"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="duration"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Accesibilidad"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="accessibility"/>
                </div>

                <div className="form-group">
                    <input type="text"
                           placeholder="Etiquetas"
                           className="form-control"
                           onChange={handleInputChange}
                           value={datos}
                           name="tags"/>
                </div>


                <div className="card-footer mb-5">
                    <input type="submit" className="boton-edit" value="Guardar"/>
                </div>
            </form>
        </Fragment>
            );
}


