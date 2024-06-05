import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {
    const { store } = useContext(Context);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState([]);
    const [tipoEventoSeleccionado, setTipoEventoSeleccionado] = useState("");
     
        
    useEffect(() => {
        let filtrados = [];

        // Filtrar por tipo de servicio
        if (store.tipoServicioSeleccionado === 'chef') {
            filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_chef);
            console.log(filtrados, "filtrados chef")
        } else if (store.tipoServicioSeleccionado === 'sumiller') {
            filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_sumiller);
            console.log(filtrados, "filtrados sumiller")
        } else if (store.tipoServicioSeleccionado === 'pastelero') {
            filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_pastelero);
        } else if (store.tipoServicioSeleccionado === 'cortador de jamon') {
            filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_jamonero);
        } else if (store.tipoServicioSeleccionado === 'barman') {
            filtrados = store.profesionales.filter(profesional => profesional.tipo_servicio_barman);
        } else {
            filtrados = store.profesionales;
        }
        console.log(store.tipoServicioSeleccionado)
        console.log(store.tipoEventoSeleccionado)

        // Filtrar por tipo de evento chef
        if (store.tipoServicioSeleccionado === 'chef' && store.tipoEventoSeleccionado === 'pica-pica') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_pica_pica);
            console.log(filtrados, "filtrados pica-pica")
        } else if (store.tipoEventoSeleccionado === 'taller de cocina') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_taller_de_cocina);
            console.log(filtrados, "filtrados taller de cocina")
        } else if (store.tipoEventoSeleccionado === 'comida de empresa') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_comida_de_trabajo);
        } else if (store.tipoEventoSeleccionado === 'comida menu degustacion') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_servicio_degustacion);
        } else if (store.tipoEventoSeleccionado === 'comida informal') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_comida_informal);
        } else if (store.tipoEventoSeleccionado === 'batchcooking') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_bacthcooking);
        }

        // Filtrar por tipo evento sumiller
        if (store.tipoServicioSeleccionado === 'sumiller' && store.tipoEventoSeleccionado === 'Cata de vinos') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_sumiller_cata);
            console.log(filtrados, "filtrados cata de vinos")
        } else if (store.tipoEventoSeleccionado === 'Maridaje') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_sumiller_maridaje);
            console.log(filtrados, "filtrados maridaje")
        } 

        if (store.tipoServicioSeleccionado === 'pastelero' && store.tipoEventoSeleccionado === 'Clase de pastelería') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_clase);
            console.log(filtrados, "filtrados clase")
        } else if (store.tipoEventoSeleccionado === 'Servicio de desayuno') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_desayuno);
            console.log(filtrados, "filtrados desayuno")
        } else if (store.tipoEventoSeleccionado === 'Servicio de merienda') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_merienda);
            console.log(filtrados, "merienda")
        } 

        if (store.tipoServicioSeleccionado === 'cortador de jamon' && store.tipoEventoSeleccionado === 'Corte de jamon') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_jamonero_corte);
            console.log(filtrados, "filtrados corte")
        } else if (store.tipoEventoSeleccionado === 'Clase de corte de jamon') {
            filtrados = filtrados.filter(profesional => profesional.tipo_servicio_jamonero_clase_corte);
            console.log(filtrados, "filtrados clase")
        } 

        setProfesionalSeleccionado(filtrados);
        console.log(filtrados);

    }, [store.tipoServicioSeleccionado, store.tipoEventoSeleccionado, store.profesionales]);
    

    return (
        <div className="container">
            <Buscador />
            {profesionalSeleccionado.map(profesional => (
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
