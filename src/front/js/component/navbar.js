import React from "react";
import Adoptaunchef_logo from "../../img/Adoptaunchef_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Adoptaunchef_logo} alt="logo_adoptaunchef" style={{ height: '120px', width: 'auto' }}></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">PRUEBAAAAAA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Área de clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Área de profesionales</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Idioma
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">ES</a></li>
                <li><a className="dropdown-item" href="#">EN</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
