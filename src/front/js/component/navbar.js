import React from "react";
import { useNavigate } from "react-router-dom";
import Cocinero_adopta_un_chef from "../../img/Cocinero_adopta_un_chef.png"
import Titulo_adopta_un_chef from "../../img/Titulo_adopta_un_chef.png"

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    // bg-body-tertiary
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '50px' }}> 
      <div className="container-fluid">
        <a 
          className="navbar-brand" 
          href="#"
          onClick={() => navigate(`/`)}
        >
          <img src={Cocinero_adopta_un_chef} alt="logo_adoptaunchef" style={{ height: '80px', width: 'auto' }}></img>
          <img src={Titulo_adopta_un_chef} alt="titulo_adoptaunchef" style={{ height: '60px', width: 'auto', marginLeft: '10px' }}></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: '20px' }}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active"
                 aria-current="page"
                 href="#"
                 onClick={() => navigate(`/sobrenosotros`)}
              >
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                aria-current="page" 
                href="#"
                onClick={() => navigate(`/iniciosesioncliente`)}
              >
                Área de clientes
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                aria-current="page" 
                href="#"
                onClick={() => navigate(`/iniciosesionprofesional`)}
              >
                  Área de profesionales
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Idioma
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">ES</a></li>
                <li><a className="dropdown-item" href="#">EN</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
