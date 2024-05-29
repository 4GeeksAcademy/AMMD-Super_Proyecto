import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const InicioSesionProfesional = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, introduce un email y una contraseña válidos.');
      return;
    }
    // Para ver en la consola que ha funcionado
    console.log(`Inicio de sesión: Email - ${email}, Contraseña - ${password}`);
    // Limpiar los campos después del inicio de sesión
    setEmail('');
    setPassword('');
    setError(null);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>¿QUIERES ECHARLE UN OJO A NUESTRA WEB?</legend>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Inicio Sesión</label>
            <input
              type="text"
              id="emailInput"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input
              type="password"
              id="passwordInput"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-auto">
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </fieldset>
      </form>
      <div className="mb-3">
        <h4>¿No tienes cuenta y quieres contratar un servicio?</h4>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">Regístrate haciendo click</p>
          </div>
          <div className="col-auto">
            <button 
              className="btn btn-primary"
              onClick={() => navigate(`/registroprofesional`)}
            >
              Aquí
            </button>
          </div>
        </div>
      </div>
      <div className="container row row-cols-1 row-cols-md-2 g-4 mt-4">
        <h2>¿Qué te apetece?</h2>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion mt-4" id="accordionExample">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              PREGUNTA 1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              PREGUNTA 2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              PREGUNTA 3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSesionProfesional;
