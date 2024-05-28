
import React, { useContext } from "react";
import RegistroUsuario from "../component/registroUsuario";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const VistaRegistroUsuario = () => {

        const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Formulario</h1>
            <RegistroUsuario />
        </div>
    );
}

export default VistaRegistroUsuario;