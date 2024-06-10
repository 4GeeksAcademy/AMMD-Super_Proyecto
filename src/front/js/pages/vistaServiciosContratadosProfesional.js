import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import ServiciosContratadosProfesional from '../component/servicioContratadoProfesional';


const VistaServiciosContratadosProfesional = () => {

    const { store, actions } = useContext(Context);

return (
    <div className="container">       
        <ServiciosContratadosProfesional/>
    </div>
);
}

export default VistaServiciosContratadosProfesional;
