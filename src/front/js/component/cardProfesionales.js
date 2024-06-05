import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cardProfesionales.css";


const CardProfesionales = ({nombre, localizacion, children, }) => {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
        <div className="row">
            <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">
                            {localizacion}
                        </p>
                        <p className="card-text">
                            Tipo de evento
                        </p>
                        <p className="card-text">
                            Tipo de cocina
                        </p>
                        <p className="card-text">
                            Reseñas
                        </p>
                        {children}
                        <button  
                            onClick={() => navigate(`/contratacionprofesional`)}
                        >
                            ¿Quieres saber más de mí?
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col">
            
        </div>
        <div className="col">
            
        </div>
        </div>
        </div>
        
    );
};

export default CardProfesionales;
