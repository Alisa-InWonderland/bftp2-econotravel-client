import React from 'react';
import {Link} from "react-router-dom";
import "./reservesList.css"

export function ReservesList({reservas}) {


    return (

        <section className='reservesList'>
                <h1 className="reservesList-title">Lista de Reservas</h1>

                <div className='tablelist'>

                    <table className="reserva-table">

                            <tr className='reserva-table-title'>
                                <th className='reserva-th'>ID</th>
                                <th className='reserva-th'>Nombre</th>
                                <th className='reserva-th'>Teléfono</th>
                                <th className='reserva-th'>Adultos</th>
                                <th className='reserva-th'>Niños</th>
                                <th className='reserva-th'>Email</th>
                                <th className='reserva-th'>Experiencia</th>
                                <th className='reserva-th'>Comentarios</th>
                            </tr>

                            {reservas.map(reserva =>
                            <tr className='reserva-table-row' key={reserva.id}>
                                 <td className="reserva-td">{reserva.id}</td>
                                 <td className="reserva-td">{reserva.nombre}</td>
                                 <td className="reserva-td">{reserva.telefono}</td>
                                 <td className="reserva-td">{reserva.adultos}</td>
                                 <td className="reserva-td">{reserva.ninos}</td>
                                 <td className="reserva-td">{reserva.email}</td>
                                 <td className="reserva-td">{reserva.experiencia}</td>
                                 <td className="reserva-td">{reserva.comentarios}</td>
                            </tr>
                        )}

                    </table>
                </div>
        </section>
    );

}


