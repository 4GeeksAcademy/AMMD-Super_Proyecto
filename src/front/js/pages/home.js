import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "../component/jumbotron";
import CarruselClientes from "../component/carruselClientes";
import "../../styles/home.css";
import CarruselProfesionales from "../component/carruselProfesionales";
import Noticias from "../component/noticias";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotron />
			<br></br>
			<CarruselClientes />
			<br></br>
			<CarruselProfesionales />
			<br></br>
			<Noticias />
		</>
	);
};
