
import React, { useContext } from "react";
import RegistroProfesional from "../component/registroProfesional";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const VistaRegistroProfesional = () => {

        const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Formulario</h1>
            <RegistroProfesional />
        </div>
    );
}

export default VistaRegistroProfesional;