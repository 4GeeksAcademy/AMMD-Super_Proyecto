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
    
    const handleResponse = (id,estado)=>{
        actions.responderServicio(id,estado)
        
    }
 
    return (
        <div className="servicios-contratados-container"> {/* Agregamos una clase para el contenedor principal */}
            <h2>Servicios Contratados</h2>
            <div className="servicios-list"> 
                {store.serviciosContratados.map(servicio => (
                    <div key={servicio.id} className={`servicio-card ${servicio.estado_servicio=="aceptar"?"bg-success" : servicio.estado_servicio == "rechazar"?"bg-danger":""}`}> 
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
                        <h5><strong>Estado del Servicio:</strong> {servicio.estado_servicio === "aceptar" ? "El servicio ha sido aceptado" : servicio.estado_servicio === "rechazar" ? "El servicio ha sido rechazado":""}</h5>
                        <button type="button" className="btn" onClick={()=>handleResponse(servicio.id, "aceptar")}>Aceptar servicio</button>
                        <button type="button" className="btn" onClick={()=>handleResponse(servicio.id, "rechazar")}>Rechazar servicio</button>
                    </div>
                    
                ))}
            </div>
          
        </div>
    );
};

export default ServiciosContratados;
