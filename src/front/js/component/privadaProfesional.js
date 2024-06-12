import React from 'react';
import "../../styles/privadaProfesional.css";
import "../../styles/MiComponente.css"
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

const handleServiciosContratadosProfesional = () => {
  navigate('/servicioscontratadosprofesional', { state: { profesional: store.profesionales } });
};

const handleEditar = () => {
  navigate('/editarprofesional', { state: { profesional: store.profesionales } });
};

const handleCerrarSesion = () => {
  actions.cerrarSesionProfesional();
  navigate('/'); 
};

const handleEliminar = () => {
  actions.eliminarProfesional();
  navigate('/'); 
};


const handleServicio = () => { 
  navigate('/servicioscontratadosprofesional'); 
};

const handleCrearOrden = () => { 
  navigate('/ordenservicio'); 
};


  return (
    <div>
      <button type="button" className="btn cerrar-profesional" style={{ position: 'absolute', top: 335, right: 0 }}  onClick={handleCerrarSesion}>CERRAR </button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="350" 
              height="450" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>         
            <br />
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Nombre: ">{profesionalEncontrado?.nombre}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Apellidos: ">{profesionalEncontrado?.apellidos}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Email: ">{profesionalEncontrado?.email}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Descripción: ">{profesionalEncontrado?.descripcion}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Información Adicional: ">{profesionalEncontrado?.info_adicional}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Población: ">{profesionalEncontrado?.localizacion}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Tipo de servicio Chef: ">{profesionalEncontrado?.tipo_servicio_chef}</p>
            <button type="button" className="btn editar-profesional"  onClick={handleEditar}>EDITAR</button>
            <button type="button" className="btn eliminar-profesional"  onClick={handleEliminar}>ELIMINAR</button>
            <button type="button" className="btn "  onClick={handleCrearOrden}>CREAR ORDEN DE SERVICIO</button>
            <button type="button" className="btn "  onClick={handleServicio}>ESTADO DE TUS SERVICIOS</button>
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