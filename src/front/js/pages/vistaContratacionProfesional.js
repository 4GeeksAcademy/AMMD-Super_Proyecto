import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const VistaContratacionProfesional = () => {

    return (
        <>          
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-success">¿Hablamos?</button>
                        <button type="button" className="btn btn-success">Contrátame</button>
                    </div>
                    <div className="col">
                    <h2>Mapa</h2>
                </div>
            </div>
            </div>
        </>
    );

};
