import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/footer.css";
import logoammd from "../../img/logoammd.png";
import logoFacebook from "../../img/logoFacebook.png";
import logoInstagram from "../../img/logoInstagram.png";
import logoTiktok from "../../img/logoTiktok.png";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer mt-auto py-3 text-center">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <img src={logoFacebook} alt="logo_facebook" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <img src={logoInstagram} alt="logo_instagram" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <img src={logoTiktok} alt="logo_tiktok" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#" >INICIO</a></li>
        <li className="menu__item"><a className="menu__link" href="#" onClick={() => navigate(`/sobrenosotros`)}>SOBRE NOSOTROS</a></li>
        <li className="menu__item"><a className="menu__link" href="#" onClick={() => navigate(`/iniciosesioncliente`)}>CLIENTES</a></li>
        <li className="menu__item"><a className="menu__link" href="#" onClick={() => navigate(`/iniciosesionprofesional`)}>PROFESIONALES</a></li>
        <img src={logoammd} alt="logo_ammd" style={{ height: '300px', width: 'auto' }}></img>
      </ul>
      <p>&copy;2024 Made by AMMD 🚀 | All Rights Reserved</p>
    </footer>
  );
};
