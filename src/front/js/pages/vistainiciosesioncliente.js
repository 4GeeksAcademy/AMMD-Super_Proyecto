import React, { useContext } from "react";
import { Context } from "../store/appContext";
import InicioSesionCliente from "../component/inicioSesionCliente";



export const VistaInicioSesionCliente = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<InicioSesionCliente />
		</>
	);
};