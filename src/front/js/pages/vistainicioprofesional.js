import React, { useContext } from "react";
import { Context } from "../store/appContext";
import InicioSesionProfesional from "../component/inicioSesionProfesional";

import "../../styles/home.css";

export const VistaInicioSesionProfesional = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<InicioSesionProfesional />
		</>
	);
};