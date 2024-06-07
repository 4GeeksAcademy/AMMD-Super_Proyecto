import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';


export const VistaContratacionProfesional = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/conversacion');
    };

    return (
        <>          
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={handleButtonClick}
                        >
                            ¿Hablamos?
                        </button>
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
