import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NoticiaCuatro from "../component/noticiaCuatro";

export const VistaNoticiaCuatro = () => {
    const { store, actions } = useContext(Context);

    return (
        <NoticiaCuatro />
    );
};