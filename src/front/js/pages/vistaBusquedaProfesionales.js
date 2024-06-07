import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {
    const { store } = useContext(Context);
    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState([]);

    useEffect(() => {
        let filtrados = store.profesionales;

        // Filtrar por tipo de servicio
        if (store.tipoServicioSeleccionado) {
            switch (store.tipoServicioSeleccionado) {
                case 'chef':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef);
                    break;
                case 'sumiller':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_sumiller);
                    break;
                case 'pastelero':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero);
                    break;
                case 'cortador de jamon':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_jamonero);
                    break;
                case 'barman':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_barman);
                    break;
                default:
                    break;
            }
        }

        // Filtrar por tipo de evento para cada tipo de servicio
        if (store.tipoServicioSeleccionado === 'chef' && store.tipoEventoSeleccionado) {
            switch (store.tipoEventoSeleccionado) {
                case 'pica-pica':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_pica_pica);
                    break;
                case 'taller de cocina':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_taller_de_cocina);
                    break;
                case 'comida de empresa':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_comida_de_trabajo);
                    break;
                case 'comida menu degustacion':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_servicio_degustacion);
                    break;
                case 'comida informal':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_comida_informal);
                    break;
                case 'batchcooking':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_chef_batchcooking);
                    break;
                default:
                    break;
            }
        }

        if (store.tipoServicioSeleccionado === 'chef' && store.tipoCocinaSeleccionada) {
            filtrados = filtrados.filter(profesional => profesional.tipo_de_cocina_especialidad === store.tipoCocinaSeleccionada);
        }

        if (store.tipoServicioSeleccionado === 'sumiller' && store.tipoEventoSeleccionado) {
            switch (store.tipoEventoSeleccionado) {
                case 'Cata de vinos':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_sumiller_cata);
                    break;
                case 'Maridaje':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_sumiller_maridaje);
                    break;
                default:
                    break;
            }
        }

        if (store.tipoServicioSeleccionado === 'pastelero' && store.tipoEventoSeleccionado) {
            switch (store.tipoEventoSeleccionado) {
                case 'Clase de pastelería':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_clase);
                    break;
                case 'Servicio de desayuno':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_desayuno);
                    break;
                case 'Servicio de merienda':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_pastelero_merienda);
                    break;
                default:
                    break;
            }
        }

        if (store.tipoServicioSeleccionado === 'cortador de jamon' && store.tipoEventoSeleccionado) {
            switch (store.tipoEventoSeleccionado) {
                case 'Corte de jamon':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_jamonero_corte);
                    break;
                case 'Clase de corte de jamon':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_jamonero_clase_corte);
                    break;
                default:
                    break;
            }
        }

        if (store.tipoServicioSeleccionado === 'barman' && store.tipoEventoSeleccionado) {
            switch (store.tipoEventoSeleccionado) {
                case 'Clase de cocktelería':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_barman_clase);
                    break;
                case 'Servicio de barra de cocktelería':
                    filtrados = filtrados.filter(profesional => profesional.tipo_servicio_barman_barra);
                    break;
                default:
                    break;
            }
        }

        // Filtrar por localidad seleccionada
        if (store.localidadSeleccionada) {
            filtrados = filtrados.filter(profesional => profesional.localizacion === store.localidadSeleccionada);
        }

        setProfesionalSeleccionado(filtrados);
        console.log(filtrados);

    }, [store.tipoServicioSeleccionado, store.tipoEventoSeleccionado, store.tipoCocinaSeleccionada, store.localidadSeleccionada, store.profesionales]);

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
