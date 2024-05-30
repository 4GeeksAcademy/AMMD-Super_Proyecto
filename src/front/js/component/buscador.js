import React from 'react';
import { useNavigate } from "react-router-dom";

const Buscador = () => {

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 5px', gap: '10px' }}>
            <ul className="nav" style={{ marginRight: '10px' }}>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">¿Qué te apetece?</a>
                </li>
            </ul>                
            <div className="dropdown" style={{ marginRight: '10px' }}>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de evento
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Taller de cocina</a></li>
                    <li><a className="dropdown-item" href="#">Comida de empresa</a></li>
                    <li><a className="dropdown-item" href="#">Comida grupo reducido</a></li>
                    <li><a className="dropdown-item" href="#">Cocktelería</a></li>                        
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
                onClick={() => navigate(`/cardprofesionales`)}
            >
                Buscar
            </button>
        </div>      
    );
}

export default Buscador;
