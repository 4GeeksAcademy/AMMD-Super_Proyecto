import React from "react";
import { useNavigate } from "react-router-dom";
import Cocinero_adopta_un_chef from "../../img/Cocinero_adopta_un_chef.png"
import Titulo_adopta_un_chef from "../../img/Titulo_adopta_un_chef.png"
import logoFacebook from "../../img/logoFacebook.png"
import logoInstagram from "../../img/logoInstagram.png"
import logoTiktok from "../../img/logoTiktok.png"
import "../../styles/navbar.css";



const NavbarAbajo = () => {
  
  const navigate = useNavigate();

  return (
    // bg-body-tertiary
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '50px' }}> 
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: '20px' }}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <img src={logoFacebook} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
        <img src={logoInstagram} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
        <img src={logoTiktok} alt="logo_adoptaunchef" style={{ height: '40px', width: 'auto' }}></img>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;