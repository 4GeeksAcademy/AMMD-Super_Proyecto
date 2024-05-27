import React from 'react';

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
            <h3>Hola {nombre} !!!</h3>
            <button type="button" className="btn btn-primary">ACTUALIZAR</button>
            <button type="button" className="btn btn-secondary">CERRAR</button>
            <button type="button" className="btn btn-success">ELIMINAR</button>
            <br />
            <p>Nombre {nombre}</p>
            <p>Apellido {apellido}</p>
            <p>Email {email}</p>
            <p>DNI {dni}</p>
            <p>Contraseña {contraseña}</p>
            <p>Pais {pais}</p>
            <p>Población {poblacion}</p>
            <p>Código Postal {codigoPostal}</p>
            <p>Dirección {direccion}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">¿Quieres contratar un chef?</p>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Búscalo aquí</button>
          </div>
        </div>
        <h4>Política de privacidad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
        </p>
      </div>
    </div>
  );
}

export default PrivadaProfesional;