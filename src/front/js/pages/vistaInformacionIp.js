import React, { useContext } from "react";
import { Context } from "../store/appContext";
import InformacionIp from "../component/informacionIP";

export const VistaInformacionIP = () => {
    const { store, actions } = useContext(Context);

    return (        
        <InformacionIp />
    );
};