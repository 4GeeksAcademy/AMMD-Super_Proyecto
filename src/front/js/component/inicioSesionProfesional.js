import React, { useContext, useState } from 'react';
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
        <fieldset style={{marginBottom: '50px'}}>
          <legend style={{marginBottom: '20px'}}>¿QUIERES ECHARLE UN OJO A NUESTRA WEB?</legend>
          <div className="mb-3" >
            <label 
              htmlFor="emailInput" className="form-label">Inicio Sesión</label>
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
          <div className="col-auto"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button  type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </fieldset>
      </form>
      <div className="mb-3">
        <h4 style={{marginBottom: '20px'}}>¿No tienes cuenta y quieres formar parte de nuestro equipo?</h4>
      </div>
      <div className="container" style={{marginBottom: '40px'}}>
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">Regístrate haciendo click</p>
          </div>
          <div className="col-auto">
            <button 
              type="button"
              className="btn btn-link"
              onClick={() => navigate(`/registroprofesional`)}
            >
              ¡Aquí!
            </button>
          </div>
        </div>
      </div>
      <h2>¿Por qué trabajar con nosotros?</h2>
      <div className="container row row-cols-1 row-cols-md-2 g-4 mt-4">
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Libertad laboral</h5>
              <p className="card-text">Descubre la libertad laboral con nuestros servicios de cocina a domicilio. Donde os contratan como chefs profesionales y podrás preparar comidas en sus hogares, adaptándose a tu horario y preferencias. Olvídate de cocinar y disfruta de más tiempo libre. ¡Sabor y comodidad garantizados!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/4349791/pexels-photo-4349791.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rompe tu rutina laboral</h5>
              <p className="card-text">Ofrecemos una oportunidad única para chefs profesionales. Rompe la rutina laboral y únete a nuestro equipo de servicios de cocina a domicilio. Prepárate para deleitar a clientes con tus habilidades culinarias en un entorno flexible y gratificante. ¡Haz que cada comida sea una experiencia memorable!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pasión por la gastronomía</h5>
              <p className="card-text">Ofrecemos experiencias culinarias exclusivas en sitios privados, donde los chefs pueden desplegar su creatividad en un entorno íntimo y personalizado. Únete a nosotros y comparte tu talento con clientes que valoran la alta cocina y la dedicación que pones en cada plato. ¡Haz de cada comida una obra maestra!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/2814829/pexels-photo-2814829.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La maestría del jamon</h5>
              <p className="card-text">Buscamos cortadores de jamón expertos para unirse a nuestra plataforma. Comparte tu habilidad y maestría con una audiencia que aprecia la excelencia. Ofrecemos visibilidad, oportunidades de crecimiento y una comunidad exclusiva que valora tu arte. ¡Únete a nosotros y eleva tu carrera al siguiente nivel!</p>
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
