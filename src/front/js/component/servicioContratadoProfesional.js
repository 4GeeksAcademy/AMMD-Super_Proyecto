import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';


const ServiciosContratadosProfesional = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // Llamar a la función para cargar los servicios contratados cuando el componente se monta
        actions.obtenerServiciosContratadosProfesional();
    }, []);

    if (!store.serviciosContratados) {
        return <div>Cargando...</div>;
    }

    const handleSubmit = (e) => {
        // Implementar la lógica para aceptar la orden de servicio
    };

    return (
        <div className="servicios-contratados-container"> {/* Agregamos una clase para el contenedor principal */}
            <h2>Servicios Contratados</h2>
            <div className="servicios-list"> {/* Contenedor de la lista de servicios */}
                {store.serviciosContratados.map(servicio => (
                    <div key={servicio.id} className="servicio-card"> {/* Tarjeta para cada servicio contratado */}
                        <h3>{servicio.nombre_evento}</h3>
                        <p><strong>Fecha:</strong> {new Date(servicio.fecha).toLocaleDateString()}</p>
                        <p><strong>Número de Personas:</strong> {servicio.numero_personas}</p>
                        <p><strong>Hora:</strong> {servicio.hora}</p>
                        <p><strong>Servicio Profesional:</strong> {servicio.servicio_profesional}</p>
                        <p><strong>Tipo de Evento:</strong> {servicio.tipo_evento}</p>
                        <p><strong>Localización:</strong> {servicio.localizacion}</p>
                        <p><strong>Dirección:</strong> {servicio.direccion}</p>
                        <p><strong>Servicio Incluye:</strong> {servicio.servicio_incluye}</p>
                        <p><strong>Costo de Servicio:</strong> {servicio.costo_servicio}</p>
                        <p><strong>Observaciones:</strong> {servicio.observaciones}</p>
                        <p><strong>Fecha de Contratación:</strong> {new Date(servicio.fecha_contratacion).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default ServiciosContratadosProfesional;
