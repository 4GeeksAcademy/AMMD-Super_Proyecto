import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Buscador from './buscador';
import { Context } from '../store/appContext';
import '../../styles/privadaCliente.css';

const PrivadaCliente = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const usuarioId = 1; 
  const usuarioEncontrado = store.usuarios.find(usuario => usuario.id === usuarioId);
  if (usuarioEncontrado) {
    console.log("Usuario encontrado:", usuarioEncontrado);
  } else {
    console.log("No se encontró ningún usuario con el ID:", usuarioId);
  }

  return (
    <div className='privadaCliente'>
      <button type="button" className="btn close-button">CERRAR</button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="300" 
              height="400" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>
            <br />
            <h6>Nombre</h6>
            <p>{usuarioEncontrado.nombre}</p>
            <h6>Apellido</h6>
            <p>{usuarioEncontrado.apellidos}</p>
            <h6>Email</h6>
            <p>{usuarioEncontrado.email}</p>
            <h6>Telefono</h6>
            <p>{usuarioEncontrado.telefono}</p>
            <h6>Dirección</h6>
            <p>{usuarioEncontrado.direccion}</p>
            <h6>Población</h6>
            <p>{usuarioEncontrado.localizacion}</p>
            <h6>Tipo de Dieta</h6>
            <p>{usuarioEncontrado.tipo_de_dieta}</p>
            <h6>Alergias</h6>
            <p>{usuarioEncontrado.alergias}</p>
          </div>
        </div>
        <div className="button-row right-align"> {/* Nuevo contenedor para los botones con clase de alineación derecha */}
          <button type="button" className="btn">EDITAR</button>
          <button type="button" className="btn">ELIMINAR</button>
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
};

export default PrivadaCliente;
