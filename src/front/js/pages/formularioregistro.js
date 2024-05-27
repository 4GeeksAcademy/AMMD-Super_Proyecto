
import React, { useContext } from "react";
import Registro from "../component/registro";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const FormularioRegistro = () => {

        const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Formulario</h1>
            <Registro />
        </div>
    );
}

export default FormularioRegistro;