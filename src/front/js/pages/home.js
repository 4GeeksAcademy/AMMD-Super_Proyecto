import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Buscador from "../component/buscador";
import Jumbotron from "../component/jumbotron";
import Carousel from "../component/carruselClientes";
import "../../styles/home.css";
import Carousel2 from "../component/carruselProfesionales";
import Noticias from "../component/noticias";
import FormularioRegistro from "./vistaregistrousuario";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">			
			<Jumbotron />
			<br></br>
			<Carousel />
			<br></br>
			<Carousel2 />
			<br></br>
			<Noticias />			
		</div>
	);
};
