import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "../component/jumbotron";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron />
	);
};
