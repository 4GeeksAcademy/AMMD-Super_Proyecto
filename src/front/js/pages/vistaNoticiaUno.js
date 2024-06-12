import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NoticiaUno from "../component/noticiaUno";

export const VistaNoticiaUno = () => {
    const { store, actions } = useContext(Context);

    return (
        <NoticiaUno />
    );
};