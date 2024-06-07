import React from "react";
import "../../styles/noticias.css";


const Noticias = () => {
    return (
        <>
            <h2 className="tituloNoticias">NOTICIAS DESTACADAS</h2>
            <div className="row noticias" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">TITULO</h5>
                            <a href="#" className="btn noticias">
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">TITULO</h5>
                            <a href="#" className="btn noticias">
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">TITULO</h5>
                            <a href="#" className="btn noticias">
                                Ver Noticia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 noticias" style={{ flex: '0 0 auto' }}>
                    <div className="card-noticia">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top noticias" alt="..." />
                        <div className="card-body noticias">
                            <h5 className="card-title">TITULO</h5>
                            <a href="#" className="btn noticias">
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
