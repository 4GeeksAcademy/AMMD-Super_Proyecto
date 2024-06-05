import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {

    const{ store } = useContext(Context)

    const [profesionalesSeleccionados, setProfesionalesSeleccionados] = useState([])

    useEffect(() => {        
        store.tipoServicioSeleccionado == 'chef' ? setProfesionalesSeleccionados([...profesionalesSeleccionados, store.profesionales.filter(profesional => profesional.tipo_servicio_chef)]) : 
        setProfesionalesSeleccionados([])
        console.log(profesionalesSeleccionados)
    }, [store.tipoServicioSeleccionado])     

    return (
        <div className="container">
            < Buscador />
            {profesionalesSeleccionados.map(profesional => < CardProfesionales nombre ={profesional.nombre} localizacion = {profesional.localizacion}>
                {/* <p>{profesional.taller_cocina}</p> */}
            </CardProfesionales>) }
        </div>
    );

};
