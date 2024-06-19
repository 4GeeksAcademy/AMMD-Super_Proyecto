import React from "react";
import "../../styles/jumbotron.css";


const Jumbotron = () => {

    return(
        <section>
            <div className="jumbotron">
                <h2>ADOPTA UN CHEF</h2>
                <h3 className="disfrutones">Solo para disfrutones</h3>
                <p>Gastronomía a domicilio: Saborea la excelencia de los mejores profesionales en la comodidad de tu hogar.</p>
                </div>
                <div className="image-wrapper">
                <img src="https://images.pexels.com/photos/6287322/pexels-photo-6287322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hiring" />
            </div>
        </section>
    )
}

export default Jumbotron;