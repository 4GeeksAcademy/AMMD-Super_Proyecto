import React from 'react';
import "../../styles/carruselProfesionales.css";


const CarruselProfesionales = () => {
    return (
        <>
            <h2 className="tituloCarruselProfesional">UNETE A NUESTRO EQUIPO Y COMPARTE TU PASION CULINARIA CON EL MUNDO</h2>
            <div id="carruselProfesionales" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carruselProfesionales" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carruselProfesionales" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carruselProfesionales" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slide 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/4252141/pexels-photo-4252141.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/3933217/pexels-photo-3933217.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slide 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carruselProfesionales" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carruselProfesionales" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default CarruselProfesionales;
