import React, { Component } from "react";
import "../../styles/footer.css";
import logoammd from "../../img/logoammd.png"
import logoFacebook from "../../img/logoFacebook.png"
import logoInstagram from "../../img/logoInstagram.png"
import logoTiktok from "../../img/logoTiktok.png"



export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
		  <img src={logoFacebook} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
		  <img src={logoInstagram} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
		  <img src={logoTiktok} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">INICIO</a></li>
        <li className="menu__item"><a className="menu__link" href="#">SOBRE NOSOTROS</a></li>
        <li className="menu__item"><a className="menu__link" href="#">CLIENTES</a></li>
        <li className="menu__item"><a className="menu__link" href="#">PROFESIONALES</a></li>
		<img src={logoammd} alt="logo_adoptaunchef" style={{ height: '300px', width: 'auto' }}></img>
      </ul>
      <p>&copy;2024 Made by AMMD 🚀 | All Rights Reserved</p>
    </footer>
);
