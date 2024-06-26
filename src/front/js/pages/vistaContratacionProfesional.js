import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from 'react-router-dom';

export const VistaContratacionProfesional = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { profesional_id } = useParams();
    const usuario_id = localStorage.getItem("id");
    const id_profesional = profesional_id
    const coment_text = "Texto de ejemplo";

    const handleClick = () => {
        navigate("/conversacion")
    };

    return (
        <>          
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            ¿Hablamos?
                        </button>
                        <button type="button" className="btn btn-success">Contrátame</button>
                    </div>
                    <div className="col">
                    <h2></h2>
                </div>
            </div>
            </div>
        </>
    );

};
