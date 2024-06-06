import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NavbarAbajo from "../component/navbarAbajo";

import "../../styles/home.css";

export const VistaNavbarAbajo  = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<NavbarAbajo />
		</>
	);
};