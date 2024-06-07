import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import Buscador from "./component/buscador";
import { Footer } from "./component/footer";
import { VistaPrivadaProfesional } from "./pages/vistaprivadaprofesional";
import { VistaInicioSesionProfesional } from "./pages/vistainicioprofesional";
import { VistaInicioSesionCliente } from "./pages/vistainiciosesioncliente";
import { VistaPrivadaCliente } from "./pages/vistaprivadacliente";
import VistaRegistroUsuario from "./pages/vistaregistrousuario";
import VistaRegistroProfesional from "./pages/vistaregistroprofesional";
import VistaSobreNosotros from "./pages/vistaSobreNosotros";
import { VistaCardProfesionales } from "./pages/vistaBusquedaProfesionales";
import { VistaContratacionProfesional } from "./pages/vistaContratacionProfesional";
import { VistaBusquedaProfesionales } from "./pages/vistaBusquedaProfesionales";
import { VistaEditarUsuario } from "./pages/vistaEditarUsuario";
import VistaReestablecerContrasena from "./pages/vistaReestablecerContrasena";
import VistaActualizacionContrasena from "./pages/vistaActualizacionContrasena";
import { VistaEditarProfesional } from "./pages/vistaEditarProfesional";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<VistaRegistroUsuario />} path="/registrousuario" />
                        <Route element={<VistaRegistroProfesional />} path="/registroprofesional" />
                        <Route element={<VistaInicioSesionCliente />} path="/iniciosesioncliente" />
                        <Route element={<VistaInicioSesionProfesional/>} path="/iniciosesionprofesional" />
                        <Route element={<VistaPrivadaCliente />} path="/privadacliente" />
                        <Route element={<VistaPrivadaProfesional />} path="/privadaprofesional" />
                        <Route element={<VistaSobreNosotros />} path="/sobrenosotros" />
                        <Route element={<VistaBusquedaProfesionales/>} path="/busquedaprofesionales" />
                        <Route element={<VistaContratacionProfesional/>} path="" />
                        <Route element={<VistaEditarUsuario />} path="/editarusuario" />
                        <Route element={<VistaEditarProfesional />} path="/editarprofesional" />
                        <Route element={<VistaReestablecerContrasena />} path="/reestablecercontrasena" />
                        <Route element={<VistaActualizacionContrasena />} path="/resetpassword/:token" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
