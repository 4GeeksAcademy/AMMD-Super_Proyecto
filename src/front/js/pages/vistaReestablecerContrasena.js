import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReestablecerContrasena from "../component/reestablecerContrasena";

const VistaReestablecerContrasena = () =>{

    const { store, actions } = useContext(Context);

    return(
        <>
         <ReestablecerContrasena/>
        </>
    )
}

export default VistaReestablecerContrasena;