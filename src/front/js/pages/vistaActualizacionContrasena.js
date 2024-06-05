import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ResetPassword from "../component/resetPassword";

const VistaActualizacionContrasena = () =>{

    const { store, actions } = useContext(Context);

    return(
        <>
         <ResetPassword/>
        </>
    )
}

export default VistaActualizacionContrasena;