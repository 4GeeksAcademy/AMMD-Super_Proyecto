import React from 'react';
import { useNavigate } from "react-router-dom";
import Buscador from './buscador';
import '../../styles/privadaCliente.css'; // Ajusta la ruta de importación del CSS


const PrivadaCliente = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container privadaCliente text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="300" 
              height="360" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>
            <button type="button" className="btn">EDITAR</button>
            <button type="button" className="btn">CERRAR</button>
            <button type="button" className="btn">ELIMINAR</button>
            <br />
            <p>Nombre</p>
            <p>Apellido </p>
            <p>Email </p>
            <p>DNI </p>
            <p>Contraseña </p>
            <p>Pais </p>
            <p>Población </p>
            <p>Código Postal </p>
            <p>Dirección </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">¿Quieres contratar un chef?</p>
          </div>
            <Buscador />
        </div>
        <h4>Política de privacidad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
        </p>
      </div>
    </div>
  );
}

export default PrivadaCliente;
