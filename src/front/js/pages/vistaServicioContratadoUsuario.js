import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import ServiciosContratados from '../component/servicioContratadoUsuario';


const VistaServiciosContratadosUsuario = () => {

    const { store, actions } = useContext(Context);

return (
    <div className="container">       
        <ServiciosContratados/>
    </div>
);
}

export default VistaServiciosContratadosUsuario;