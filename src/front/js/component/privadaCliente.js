import React from 'react';
import { useNavigate } from "react-router-dom";
import Buscador from './buscador';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useState,useEffect } from 'react';

const PrivadaCliente = () => {
  const navigate = useNavigate();
  const{store,actions}= useContext(Context)

//prueba para renderizar un usuario
const usuarioId = 1; 
const usuarioEncontrado = store.usuarios.find(usuario => usuario.id === usuarioId);
if (usuarioEncontrado) {
  console.log("Usuario encontrado:", usuarioEncontrado);
} else {
  console.log("No se encontró ningún usuario con el ID:", usuarioId);
}

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="300" 
              height="300" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>
            <button type="button" className="btn btn-primary">EDITAR</button>
            <button type="button" className="btn btn-secondary">CERRAR</button>
            <button type="button" className="btn btn-success">ELIMINAR</button>
            <br />
            <p>Nombre{usuarioEncontrado.nombre}</p>
            <p>Apellido{usuarioEncontrado.apellidos} </p>
            <p>Email{usuarioEncontrado.email} </p>
            <p>Direccion {usuarioEncontrado.direccion}</p>          
            <p>Pais </p>
            <p>Población {usuarioEncontrado.localizacion}</p>
            <p>Código Postal </p>
            <p>Alergias {usuarioEncontrado.alergias} </p>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">¿Quieres contratar un chef?</p>
          </div>
          <div className="container-buscador">
            <Buscador />
          </div>
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