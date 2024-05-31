import React, { useState } from 'react';
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Buscador = () => {

    const navigate = useNavigate();
    const{store} = useContext(Context);

    const filtrarTipoDeServicio = (profesionales, tipoServicio) =>{
        return profesionales.filter(profesional => profesional[tipoServicio] === true)
    }
    const [chefs,setChefs]=useState([])
    
    const pasteleros = filtrarTipoDeServicio(store.profesionales, "tipo_servicio_pastelero")
    const sumillers = filtrarTipoDeServicio(store.profesionales, "tipo_servicio_sumiller")
    const jamoneros = filtrarTipoDeServicio(store.profesionales, "tipo_servicio_jamonero")
    const barmans = filtrarTipoDeServicio(store.profesionales, "tipo_servicio_barman")    

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
                    <li><a className="dropdown-item" href="#" onClick={()=>{setChefs(filtrarTipoDeServicio(store.profesionales, "tipo_servicio_chef"))}}>Chef</a></li>
                    <li><a className="dropdown-item" href="#">Sumiller</a></li>
                    <li><a className="dropdown-item" href="#">Pasteler@</a></li>
                    <li><a className="dropdown-item" href="#">Cortador/a de jamón</a></li>
                    <li><a className="dropdown-item" href="#">Barman/Barwomen</a></li>                        
                </ul>
            </div>             
            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento chef
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Taller de cocina</a></li>
                    <li><a className="dropdown-item" href="#">Servicio coctel</a></li>
                    <li><a className="dropdown-item" href="#">Comida de empresa</a></li>
                    <li><a className="dropdown-item" href="#">Comida menu degustacion</a></li>
                    <li><a className="dropdown-item" href="#">Batchcooking</a></li>                        
                </ul>
            </div>

            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento Cortador de Jamon
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Corte de jamon</a></li>
                    <li><a className="dropdown-item" href="#">Clase de corte de jamon</a></li>
                                     
                </ul>
            </div>

            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento Cortador de Sumiller
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Cata de vinos</a></li>
                    <li><a className="dropdown-item" href="#">Maridaje</a></li>                                     
                </ul>
            </div>
            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento Pasteler@
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Clase de pastelería</a></li>
                    <li><a className="dropdown-item" href="#">Servicio de desayuno</a></li>  
                    <li><a className="dropdown-item" href="#">Servicio de merienda</a></li>                                    
                </ul>
            </div>

            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento BArman/Barwomen
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Clase de cocktelería</a></li>
                    <li><a className="dropdown-item" href="#">Servicio de barra de cocktelería</a></li>                                                       
                </ul>
            </div>

            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de cocina
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Cocina española</a></li>
                    <li><a className="dropdown-item" href="#">Cocina peruana</a></li>
                    <li><a className="dropdown-item" href="#">Cocina japonesa</a></li>
                    <li><a className="dropdown-item" href="#">Cocina italiana</a></li>
                    <li><a className="dropdown-item" href="#">Cocina vegana</a></li>
                    <li><a className="dropdown-item" href="#">Cocina mexicana</a></li>
                    <li><a className="dropdown-item" href="#">Cocina griega</a></li>
                    <li><a className="dropdown-item" href="#">Cocina argentina</a></li>
                    <li><a className="dropdown-item" href="#">Cocina americana</a></li>
                    <li><a className="dropdown-item" href="#">Cocina tailandesa</a></li>
                    <li><a className="dropdown-item" href="#">Cocina creativa</a></li>
                </ul>
            </div>
            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Localidad
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Madrid</a></li>
                    <li><a className="dropdown-item" href="#">Barcelona</a></li>
                    <li><a className="dropdown-item" href="#">Valencia</a></li>
                </ul>
            </div>
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                style={{ marginLeft: '10px' }}
                onClick={() => navigate(`/busquedaprofesionales`)}
            >
                Buscar
            </button>
        </div>      
    );
}

export default Buscador;
