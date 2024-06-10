import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const ServiciosContratados = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Llamar a la función para cargar los servicios contratados cuando el componente se monta
        actions.obtenerServiciosContratadosUsuario();
    }, []);

    if (!store.serviciosContratados) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>Servicios Contratados</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del Evento</th>
                        <th>Fecha</th>
                        <th>Número de Personas</th>
                        <th>Hora</th>
                        <th>Servicio Profesional</th>
                        <th>Tipo de Evento</th>
                        <th>Localización</th>
                        <th>Dirección</th>
                        <th>Servicio Incluye</th>
                        <th>Costo de Servicio</th>
                        <th>Observaciones</th>
                        <th>Fecha de Contratación</th>
                    </tr>
                </thead>
                <tbody>
                    {store.serviciosContratados.length > 0 ? (
                        store.serviciosContratados.map(servicio => (
                            <tr key={servicio.id}>
                                <td>{servicio.nombre_evento}</td>
                                <td>{new Date(servicio.fecha).toLocaleDateString()}</td>
                                <td>{servicio.numero_personas}</td>
                                <td>{servicio.hora}</td>
                                <td>{servicio.servicio_profesional}</td>
                                <td>{servicio.tipo_evento}</td>
                                <td>{servicio.localizacion}</td>
                                <td>{servicio.direccion}</td>
                                <td>{servicio.servicio_incluye}</td>
                                <td>{servicio.costo_servicio}</td>
                                <td>{servicio.observaciones}</td>
                                <td>{new Date(servicio.fecha_contratacion).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="12">No hay servicios contratados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ServiciosContratados;
