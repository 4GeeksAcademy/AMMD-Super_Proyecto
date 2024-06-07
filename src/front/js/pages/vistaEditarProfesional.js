import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EditarProfesional from "../component/editarProfesional";

export const VistaEditarProfesional = () => {
    const { store, actions } = useContext(Context);

    return (
        <EditarProfesional />
    );
};