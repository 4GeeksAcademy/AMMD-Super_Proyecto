import React from "react";
import { useNavigate } from "react-router-dom";
import Cocinero_adopta_un_chef from "../../img/Cocinero_adopta_un_chef.png"
import Titulo_adopta_un_chef from "../../img/Titulo_adopta_un_chef.png"
import logoFacebook from "../../img/logoFacebook.png"
import logoInstagram from "../../img/logoInstagram.png"
import logoTiktok from "../../img/logoTiktok.png"
import "../../styles/navbar.css";



const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    // bg-body-tertiary
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '50px' }}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={() => navigate(`/`)}>
      <img src={Cocinero_adopta_un_chef} alt="logo_adoptaunchef" style={{ height: '80px', width: 'auto' }}></img>
      <img src={Titulo_adopta_un_chef} alt="titulo_adoptaunchef" style={{ height: '150px', width: 'auto', marginLeft: '10px' }}></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: '20px' }}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active nav-link-custom" aria-current="page" href="#" onClick={() => navigate(`/sobrenosotros`)}>
            <span className="hover-text" data-text="Sobre nosotros">Sobre nosotros</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link-custom" aria-current="page" href="#" onClick={() => navigate(`/iniciosesioncliente`)}>
            <span className="hover-text" data-text="Área de clientes">Área de clientes</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link-custom" aria-current="page" href="#" onClick={() => navigate(`/iniciosesionprofesional`)}>
            <span className="hover-text" data-text="Área de profesionales">Área de profesionales</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
