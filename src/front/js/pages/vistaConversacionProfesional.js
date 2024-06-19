import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ConversacionProfesional from "../component/conversacionProfesional";

export const VistaConversacionProfesional = () => {
    const { store, actions } = useContext(Context);

    return (
        <ConversacionProfesional />
    );
};