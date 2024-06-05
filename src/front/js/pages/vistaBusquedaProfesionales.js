import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {
    const { store } = useContext(Context);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState([]);
    const [tipoDeEventoSeleccionado, setTipoDeEventoSeleccionado] = useState("");

    useEffect(() => {

        // 1º Dropdown tipo de servicios (los profesionales que seleccionemos)
        if (store.tipoServicioSeleccionado == 'chef') {
            const filtrados_chef = store.profesionales.filter(profesional => profesional.tipo_servicio_chef);
            setProfesionalSeleccionado(filtrados_chef);
        } else if (store.tipoServicioSeleccionado == 'sumiller') {
            const filtrados_sumiller = store.profesionales.filter(profesional => profesional.tipo_servicio_sumiller);
            setProfesionalSeleccionado(filtrados_sumiller);
        } else if (store.tipoServicioSeleccionado == 'pastelero') {
            const filtrados_pastelero = store.profesionales.filter(profesional => profesional.tipo_servicio_pastelero);
            setProfesionalSeleccionado(filtrados_pastelero);
        } else if (store.tipoServicioSeleccionado == 'cortador de jamon') {
            const filtrados_cortador_de_jamon = store.profesionales.filter(profesional => profesional.tipo_servicio_jamonero);
            setProfesionalSeleccionado(filtrados_cortador_de_jamon);
        } else if (store.tipoServicioSeleccionado == 'barman') {
            const filtrados_barman = store.profesionales.filter(profesional => profesional.tipo_servicio_barman);
            setProfesionalSeleccionado(filtrados_barman);
        } else setProfesionalSeleccionado([])
        
        console.log(profesionalSeleccionado);

        // 2º Dropdown tipos de eventos del chef
        // if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_pica_pica = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_pica_pica);
        //     setTipoDeEventoSeleccionado(filtrados_pica_pica);
        // } else if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_taller_de_cocina = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_taller_de_cocina);
        //     setTipoDeEventoSeleccionado(filtrados_taller_de_cocina);
        // } else if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_comida_de_trabajo = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_comida_de_trabajo);
        //     setTipoDeEventoSeleccionado(filtrados_comida_de_trabajo);
        // } else if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_servicio_degustacion = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_servicio_degustacion);
        //     setTipoDeEventoSeleccionado(filtrados_servicio_degustacion);
        // } else if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_comida_informal = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_comida_informal);
        //     setTipoDeEventoSeleccionado(filtrados_comida_informal);
        // } else if (store.tipoServicioSeleccionado == 'chef') {
        //     const filtrados_bacthcooking = store.profesionales.filter(profesional => profesional.tipo_servicio_chef_bacthcooking);
        //     setTipoDeEventoSeleccionado(filtrados_bacthcooking);
        // } else setTipoDeEventoSeleccionado([])

        // console.log(tipoDeEventoSeleccionado)

    }, [store.tipoServicioSeleccionado, store.profesionales]); 

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
