import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {
    const { store } = useContext(Context);
    const [profesionalesSeleccionados, setProfesionalesSeleccionados] = useState([]);

    useEffect(() => {
        if (store.tipoServicioSeleccionado) {
            const filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_chef);
            setProfesionalesSeleccionados(filtrados);
        } else {
            setProfesionalesSeleccionados([]);
        }
        console.log(profesionalesSeleccionados);
    }, [store.tipoServicioSeleccionado, store.profesionales]); // Asegúrate de que se ejecuta cada vez que cambian los profesionales o el tipo de servicio seleccionado

    return (
        <div className="container">
            <Buscador />
            {profesionalesSeleccionados.map(profesional => (
                <CardProfesionales 
                    key={profesional.id} 
                    nombre={profesional.nombre} 
                    localizacion={profesional.localizacion}
                    tipo_de_profesional={profesional.tipo_de_profesional}
                    tipo_de_cocina_especialidad={profesional.tipo_de_cocina_especialidad}
                    tipo_servicio={profesional.tipo_servicio_chef || profesional.tipo_servicio_jamonero_corte || profesional.tipo_servicio_sumiller_maridaje || profesional.tipo_servicio_pastelero_clase || profesional.tipo_servicio_barman_barra}
                >
                    {/* <p>{profesional.taller_cocina}</p> */}
                </CardProfesionales>
            ))}
        </div>
    );
};
