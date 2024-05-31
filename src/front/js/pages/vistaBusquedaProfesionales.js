import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardProfesionales from "../component/cardProfesionales";
import Buscador from "../component/buscador";

export const VistaBusquedaProfesionales = () => {

    return (
        <div className="container">
            < Buscador />
            < CardProfesionales />
        </div>
    );

};
