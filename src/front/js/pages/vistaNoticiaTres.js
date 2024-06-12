import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NoticiaTres from "../component/noticiaTres";

export const VistaNoticiaTres = () => {
    const { store, actions } = useContext(Context);

    return (
        <NoticiaTres />
    );
};