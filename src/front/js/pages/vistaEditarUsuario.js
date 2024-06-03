import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EditarUsuario from "../component/editarusuario";

export const VistaEditarUsuario = () => {
    const { store, actions } = useContext(Context);

    return (
        <EditarUsuario />
    );
};