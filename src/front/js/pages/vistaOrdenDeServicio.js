import React, { useContext } from "react";
import { Context } from "../store/appContext";
import OrdenDeServicio from "../component/ordenDeServicio";

export const VistaOrdenDeServicio  = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<OrdenDeServicio />
		</>
	);
};