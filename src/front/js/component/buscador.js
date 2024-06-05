import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/buscador.css";

const Buscador = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState("");
    const [tipoDeEvento, setTipoDeEvento] = useState("");
    const [tipoDeComida, setTipoDeComida] = useState("");
    const [localizacion, setLocalizacion] = useState("");     

    const manejarTipoProfesional = (tipoProfesional) => {
        setProfesionalSeleccionado(tipoProfesional);
        setTipoDeEvento("");
        setTipoDeComida("");
    }

    const manejarTipoEvento = (tipoEvento) => {
        setTipoDeEvento(tipoEvento);
    }

    const manejarTipoComida = (tipoComida) => {
        setTipoDeComida(tipoComida);
    }

    const manejarBuscar = (servicio, evento) => {
        actions.filtrarTipoServicio(servicio);
        actions.filtrarTipoEvento(evento);
        navigate(`/busquedaprofesionales`);
    }

    console.log(profesionalSeleccionado)
    console.log(tipoDeEvento)
    console.log(tipoDeComida)
    console.log(localizacion)

    return (
        <div className="container-buscador" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 5px', gap: '10px' }}>
            <ul className="nav" style={{ marginRight: '10px' }}>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true"><strong>¿Qué te apetece?</strong></a>
                </li>
            </ul>   
            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de servicio
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('chef')}>Chef</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('sumiller')}>Sumiller</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('pastelero')}>Pasteler@</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('cortador de jamon')}>Cortador/a de jamón</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('barman')}>Barman/Barwomen</a></li>                        
                </ul>
            </div> 

            {profesionalSeleccionado === 'chef' && (
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de evento chef
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('pica-pica')}>Pica-pica</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('taller de cocina')}>Taller de cocina</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida informal')}>Comida informal</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida de empresa')}>Comida de empresa</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida menu degustacion')}>Comida menu degustacion</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('batchcooking')}>Batchcooking</a></li>
                    </ul>
                </div>
            )}

            {profesionalSeleccionado === 'chef' && ( 
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de cocina
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina española')}>Cocina española</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina peruana')}>Cocina peruana</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina japonesa')}>Cocina japonesa</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina italiana')}>Cocina italiana</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina vegana')}>Cocina vegana</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina mexicana')}>Cocina mexicana</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina griega')}>Cocina griega</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina argentina')}>Cocina argentina</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina americana')}>Cocina americana</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina tailandesa')}>Cocina tailandesa</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoComida('Cocina creativa')}>Cocina creativa</a></li>
                    </ul>
                </div>
            )}     

            {profesionalSeleccionado === 'sumiller' && ( 
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de evento  Sumiller
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Cata de vinos')}>Cata de vinos</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Maridaje')}>Maridaje</a></li>                                     
                    </ul>
                </div>
            )}

            {profesionalSeleccionado === 'pastelero' && ( 
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de evento Pasteler@
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de pastelería')}>Clase de pastelería</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de desayuno')}>Servicio de desayuno</a></li>  
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de merienda')}>Servicio de merienda</a></li>                                    
                    </ul>
                </div>
            )}

            {profesionalSeleccionado === 'cortador de jamon' && ( 
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de evento Cortador de Jamon
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Corte de jamon')}>Corte de jamon</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de corte de jamon')}>Clase de corte de jamon</a></li>
                    </ul>
                </div> 
            )}

            {profesionalSeleccionado === 'barman' && ( 
                <div className="dropdown" style={{ marginRight: '10px' }}>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de evento Barman/Barwomen
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de cocktelería')}>Clase de cocktelería</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de barra de cocktelería')}>Servicio de barra de cocktelería</a></li>                                                       
                    </ul>
                </div>
            )}

            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Localidad
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => setLocalizacion('Madrid')}>Madrid</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setLocalizacion('Barcelona')}>Barcelona</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setLocalizacion('Valencia')}>Valencia</a></li>
                </ul>
            </div>
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                style={{ marginLeft: '10px' }}               
                onClick={() => manejarBuscar(profesionalSeleccionado, tipoDeEvento) }
            >
                Buscar
            </button>
        </div>      
    );
}

export default Buscador;
