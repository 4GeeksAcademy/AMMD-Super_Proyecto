import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EditarUsuario from "../component/conversacion";

export const VistaConversacion = () => {
    const { store, actions } = useContext(Context);

    return (
        <Conversacion />
    );
};