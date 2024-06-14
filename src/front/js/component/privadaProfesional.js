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

useEffect (() => {
  // actions.cargarProfesional(store.profesionalSeleccionado.id)
  console.log(store.profesionales, "profesional")
},[store.profesionales])

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
            <h6>Nombre </h6>
            <p>{store.profesionales.nombre}</p>
            <h6>Apellido </h6>
            <p>{store.profesionales.apellidos}</p>
            <h6>Email </h6>
            <p>{store.profesionales.email}</p>
            <h6>Profesion</h6>
            <p>{store.profesionales.tipo_de_profesional}</p>
            <h6>Información adicional</h6>
            <p>{store.profesionales.info_adicional}</p>
            <h6>Población</h6>
            <p>{store.profesionales.localizacion}</p>

            {store.profesionales.tipo_de_profesional === "chef" && (
              <>
                <h6>Tipos de servicio del chef</h6>
                {store.profesionales.tipo_servicio_chef_pica_pica && <p>Pica-pica: {store.profesionales.tipo_servicio_chef_pica_pica}</p>}
                {store.profesionales.tipo_servicio_chef_taller_de_cocina && <p>Taller de cocina: {store.profesionales.tipo_servicio_chef_taller_de_cocina}</p>}
                {store.profesionales.tipo_servicio_chef_comida_de_trabajo && <p>Comida de empresa: {store.profesionales.tipo_servicio_chef_comida_de_trabajo}</p>}
                {store.profesionales.tipo_servicio_chef_servicio_degustacion && <p>Menú degustación: {store.profesionales.tipo_servicio_chef_servicio_degustacion}</p>}
                {store.profesionales.tipo_servicio_chef_comida_informal && <p>Comida informal: {store.profesionales.tipo_servicio_chef_comida_informal}</p>}
                {store.profesionales.tipo_servicio_chef_batchcooking && <p>Batchcooking: {store.profesionales.tipo_servicio_chef_batchcooking}</p>} 
              </>         
            )}

            {store.profesionales.tipo_de_profesional === "chef" && (
              <>
                <h6>Tipos de cocina del chef</h6>
                <p>{store.profesionales.tipo_de_cocina_especialidad}</p>
              </>
            )}

            {store.profesionales.tipo_de_profesional === "cortador de jamon" && (
              <>
                <h6>Tipos de servicio del jamonero</h6>
                {store.profesionales.tipo_servicio_jamonero_corte && <p>Corte de jamón: {store.profesionales.tipo_servicio_jamonero_corte}</p>}
                {store.profesionales.tipo_servicio_jamonero_clase_corte && <p>Clase de corte de jamón: {store.profesionales.tipo_servicio_jamonero_clase_corte}</p>}
              </>         
            )}

            {store.profesionales.tipo_de_profesional === "sumiller" && (
              <>
                <h6>Tipos de servicio del sumiller</h6>
                {store.profesionales.tipo_servicio_sumiller_maridaje && <p>Servicio de maridaje: {store.profesionales.tipo_servicio_sumiller_maridaje}</p>}
                {store.profesionales.tipo_servicio_sumiller_cata && <p>Servicio de cata: {store.profesionales.tipo_servicio_sumiller_cata}</p>}
              </>         
            )}

            {store.profesionales.tipo_de_profesional === "pastelero" && (
              <>
                <h6>Tipos de servicio del pastelero</h6>
                {store.profesionales.tipo_servicio_pastelero_clase && <p>Clase de pastelería: {store.profesionales.tipo_servicio_pastelero_clase}</p>}
                {store.profesionales.tipo_servicio_pastelero_desayuno && <p>Desayuno: {store.profesionales.tipo_servicio_pastelero_desayuno}</p>}
                {store.profesionales.tipo_servicio_pastelero_merienda && <p>Merienda: {store.profesionales.tipo_servicio_pastelero_merienda}</p>}
              </>         
            )}    

            {store.profesionales.tipo_de_profesional === "barman" && (
              <>
                <h6>Tipos de servicio del barman</h6>
                {store.profesionales.tipo_servicio_barman_barra && <p>Servicio de barra: {store.profesionales.tipo_servicio_barman_barra}</p>}
                {store.profesionales.tipo_servicio_barman_clase && <p>Clase de barman: {store.profesionales.tipo_servicio_barman_clase}</p>}
              </>         
            )}   

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