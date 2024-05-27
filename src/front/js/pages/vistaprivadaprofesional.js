import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PrivadaProfesional from "../component/privadaProfesional";

import "../../styles/home.css";

export const VistaPrivadaProfesional = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<PrivadaProfesional />
		</>
	);
};