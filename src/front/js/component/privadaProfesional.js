import React from 'react';
import "../../styles/privadaProfesional.css";


function PrivadaProfesional() {

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="300" 
              height="300" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>
            <button type="button" className="btn btn-primary">EDITAR</button>
            <button type="button" className="btn btn-secondary">CERRAR</button>
            <button type="button" className="btn btn-success">ELIMINAR</button>
            <br />
            <p>Nombre </p>
            <p>Apellido </p>
            <p>Email </p>
            <p>DNI </p>
            <p>Contraseña </p>
            <p>Pais </p>
            <p>Población </p>
            <p>Código Postal </p>
            <p>Dirección </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h4>Política de privacidad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
        </p>
      </div>
    </div>
  );
}

export default PrivadaProfesional;