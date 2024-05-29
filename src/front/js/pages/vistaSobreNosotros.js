
import React, { useContext } from "react";
import SobreNosotros from "../component/sobreNosotros";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const VistaSobreNosotros = () => {

        const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <SobreNosotros />
        </div>
    );
}

export default VistaSobreNosotros;