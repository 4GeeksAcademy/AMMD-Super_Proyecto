import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NoticiaDos from "../component/noticiaDos";

export const VistaNoticiaDos = () => {
    const { store, actions } = useContext(Context);

    return (
        <NoticiaDos />
    );
};