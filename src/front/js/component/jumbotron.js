import React from "react";
import "../../styles/jumbotron.css";


const Jumbotron = () => {

    return(
        <div className="jumbotron" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '800px' }}>
            <h1 className="display-4">ADOPTA UN CHEF</h1>
            <h3 className="lead">Solo para disfrutones</h3>
            <hr className="my-4"/>
            <p>Gastronomía a domicilio: Saborea la excelencia de los mejores chefs en la comodidad de tu hogar</p>
        </div>
    )
}

export default Jumbotron;