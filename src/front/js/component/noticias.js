import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/noticias.css";


const Noticias = () => {

    const navigate = useNavigate();


    return (
        <>
            <h2 className="tituloNoticias">NOTICIAS DESTACADAS</h2>
            <div className="row noticias" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/25338174/pexels-photo-25338174/free-photo-of-comida-mujer-efecto-desenfocado-patatas-fritas.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">INSOMNIO CRONICO</h5>
                            <a href="#" className="btn noticias" onClick={() => navigate(`/vistaNoticiaUno`)}>
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/6489509/pexels-photo-6489509.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">COCINA INTELIGENTE</h5>
                            <a href="#" className="btn noticias" onClick={() => navigate(`/vistaNoticiaDos`)}>
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/22665550/pexels-photo-22665550/free-photo-of-capsula-de-carrera.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">REVOLUCION CELULAR</h5>
                            <a href="#" className="btn noticias" onClick={() => navigate(`/vistaNoticiaTres`)}>
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/4877840/pexels-photo-4877840.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">CRISIS POTASIO</h5>
                            <a href="#" className="btn noticias" onClick={() => navigate(`/vistaNoticiaCuatro`)}>
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Noticias;
