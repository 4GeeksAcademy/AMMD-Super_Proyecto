import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PrivadaCliente from "../component/privadaCliente";

import "../../styles/home.css";

export const VistaPrivadaCliente  = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<PrivadaCliente />
		</>
	);
};