import React from 'react';
import { useNavigate } from "react-router-dom";
import Buscador from './buscador';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useState,useEffect } from 'react';

const PrivadaProfesional = () => {

   const navigate = useNavigate();
   const{store,actions}= useContext(Context)

   //prueba para renderizar un usuario
const profesionalId = 1; 
const profesionalEncontrado = store.profesionales.find(profesional => profesional.id === profesionalId);
if (profesionalEncontrado) {
  console.log("profesional encontrado:", profesionalEncontrado);
} else {
  console.log("No se encontró ningún profesional con el ID:", profesionalId);
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
            <h6>Nombre </h6>
            <p>{profesionalEncontrado.nombre}</p>
            <h6>Apellido </h6>
            <p>{profesionalEncontrado.apellidos}</p>
            <h6>Email </h6>
            <p>{profesionalEncontrado.email}</p>
            <h6>Profesion</h6>
            <p>{profesionalEncontrado.descripcion}</p>
            <h6>Información adicional</h6>
            <p>{profesionalEncontrado.info_adicional}</p>
            <h6>Población</h6>
            <p>{profesionalEncontrado.localizacion}</p>
            <h6>tipos de servicio</h6>
            <p>{profesionalEncontrado.tipo_servicio_chef}</p>
            
          </div>
        </div>
      </div>

      <div className="container">
        <h4>Política de privacidad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
        </p>
      </div>
    </div>
  );
}

export default PrivadaProfesional;