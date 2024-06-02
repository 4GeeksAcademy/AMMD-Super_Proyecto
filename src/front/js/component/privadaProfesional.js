import React from 'react';
import '../../styles/privadaProfesional.css'; // Ajusta la ruta de importación del CSS

function PrivadaProfesional() {

  return (
    <div className='privadaProfesional'>
      <button type="button" className="btn close-button">CERRAR</button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="300" 
              height="400" 
            />
          </div>
          <div className="col">
            <h3>Hola !!!</h3>            
            <br />
            <p>Nombre </p>
            <p>Apellido </p>
            <p>Email </p>
            <p>DNI </p>
            <p>Contraseña </p>
            <p>Población </p>
            <p>Dirección </p>
          </div>
          <div className="button-row editar eliminar"> {/* Nuevo contenedor para los botones con clase de alineación derecha */}
            <button type="button" className="btn">EDITAR</button>
            <button type="button" className="btn">ELIMINAR</button>
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