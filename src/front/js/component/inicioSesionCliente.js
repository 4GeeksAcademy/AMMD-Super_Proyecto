import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const InicioSesionCliente = () => {
  const { store, actions } = useContext(Context);
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function onChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    setFormValue({ ...formValue, [id]: value });
  }
  return (
    <div className="container">
      <form>
        <fieldset style={{marginBottom: '50px'}}>
          <legend style={{marginBottom: '20px'}}>¿QUIERES ECHARLE UN OJO A NUESTRA WEB?</legend>
          <div className="mb-3" >
            <label
              htmlFor="emailInput" className="form-label">Inicio Sesión</label>
            <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={formValue.email}
                  onChange={onChange}
                />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={formValue.password}
                  onChange={onChange}
                />
          </div>
          <div className="col-auto"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button  type="submit" className="btn btn-primary" onClick={() => actions.iniciarSesionUsuario(formValue.email, formValue.password, navigate)}>
                  Iniciar sesión
                </button>
          </div>
        </fieldset>
      </form>
      <div className="mb-3">
        <h4 style={{marginBottom: '20px'}}>¿No tienes cuenta y quieres contratar un servicio?</h4>
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
              onClick={() => navigate(`/registrousuario`)}
            >
              ¡Aquí!
            </button>
          </div>
        </div>
      </div>
      <h2>¿Qué te apetece?</h2>
      <div className="container row row-cols-1 row-cols-md-2 g-4 mt-4">
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/8942304/pexels-photo-8942304.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Un Barman en tu sitio favorito</h5>
              <p className="card-text">Transforma tu hogar en un bar exclusivo con nuestro servicio de barman a domicilio. Ideal para fiestas y eventos, nuestros mixólogos profesionales preparan cócteles personalizados, garantizando una experiencia única y memorable para ti y tus invitados. ¡Disfruta de una noche excepcional sin salir de casa!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/7525182/pexels-photo-7525182.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Clases de Pastelería en casa</h5>
              <p className="card-text">Descubre el arte de la pastelería desde la comodidad de tu hogar con nuestras clases personalizadas. Aprende técnicas profesionales y recetas deliciosas de la mano de expertos pasteleros. Ideal para todas las edades y niveles, convierte tu cocina en un taller de dulces creaciones. ¡Reserva ahora!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/8775093/pexels-photo-8775093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Catas personalizadas</h5>
              <p className="card-text">Disfruta de una experiencia única con nuestras clases de catas de vino personalizadas en casa. Guiado por expertos sommeliers, aprenderás a apreciar y distinguir distintos vinos, sus aromas y sabores. Perfecto para cualquier ocasión, convierte tu hogar en una bodega exclusiva. ¡Reserva tu cata hoy!</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img src="https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Abre las puertas de tu cocina a nuestros chefs</h5>
              <p className="card-text">Transforma tu cocina en un restaurante de alta cocina invitando a un chef profesional a tu hogar. Disfruta de menús personalizados, técnicas culinarias avanzadas y platos exquisitos sin salir de casa. Eleva tus cenas y eventos especiales con una experiencia gastronómica única. ¡Reserva ahora!</p>
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
export default InicioSesionCliente;