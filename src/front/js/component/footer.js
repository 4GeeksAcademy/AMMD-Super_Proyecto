import React, { Component } from "react";
import "../../styles/footer.css";
import logoammd from "../../img/logoammd.png"



export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made by AMMD 🚀
			<img src={logoammd} alt="logo_adoptaunchef" style={{ height: '300px', width: 'auto' }}></img>
		</p>
	</footer>
);
