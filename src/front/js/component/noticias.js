import React from "react";
import "../../styles/noticias.css";


const Noticias = () => {
    return (
        <>
            <h2 className="tituloNoticias">NOTICIAS DESTACADAS</h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center'}}>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top-noticias" alt="..." />
                        <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top-noticias" alt="..." />
                        <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top-noticias" alt="..." />
                        <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Noticias;
