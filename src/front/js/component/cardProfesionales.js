import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cardProfesionales.css";


const CardProfesionales = () => {
    const navigate = useNavigate();

    return (
        <div class="container text-center">
        <div class="row">
            <div class="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Miguel</h5>
                        <p className="card-text">
                            Barcelona
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
        <div class="col">
            
        </div>
        <div class="col">
            
        </div>
        </div>
        </div>
        
    );
};

export default CardProfesionales;
