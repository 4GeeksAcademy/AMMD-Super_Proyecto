import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/inicioSesionCliente.css";


import "../../styles/iniciarSesionCliente.css"

const InicioSesionCliente = () => {
  const { store, actions } = useContext(Context);
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function onChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    setFormValue({ ...formValue, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const loggedin = await actions.iniciarSesionUsuario(formValue.email, formValue.password);
        if (loggedin) {
            navigate("/privadacliente");
        } else {
            alert("Error al iniciar sesión");
        }
        console.log(loggedin)
    } catch (error) {
        console.log("Error al iniciar sesión", error);
        alert("Error al iniciar sesión");
    }    
};

  return (
    <div className="container">
      <form>
        <div className="login" style={{marginBottom: '50px'}}>
          <div className="h1">Login</div>
            <input
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              placeholder="Email"
              id="email"
              name="email"
              type="text"
              value={formValue.email}
              onChange={onChange}
            />
            <input
              placeholder="Contraseña"
              id="password"
              name="password"
              type="password"
              value={formValue.password}
              onChange={onChange}
            />
            <input
              value="Iniciar sesión"
              className="btn-inicio-sesion"
              type="submit"
              onClick={(e) =>handleSubmit(e) }
            />
        </div>
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
              className="btn"
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
             <strong>¿Qué es Adopta un Chef?</strong> 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Adopta un Chef es una plataforma que conecta a clientes con chefs profesionales y expertos en gastronomía para ofrecer una variedad de servicios culinarios personalizados, como clases de cocina, catas de vino, talleres de cócteles, y más.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Servicios</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ol>
                <li><strong>¿Qué tipo de servicios ofrecen?</strong> Ofrecemos clases de cocina personalizadas, cenas privadas, catas de vino, talleres de cócteles, planificación y ejecución de eventos gastronómicos, y más.</li>
                <li><strong>¿Cómo funciona el servicio de cenas privadas?</strong> Un chef profesional visitará tu hogar para preparar y servir una comida gourmet. Puedes personalizar el menú según tus preferencias y necesidades dietéticas.</li>
                <li><strong>¿Qué incluyen las clases de cocina?</strong> Las clases de cocina incluyen instrucciones paso a paso, todos los ingredientes necesarios, y la oportunidad de aprender técnicas culinarias de un chef profesional.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Reservas</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ol>
                <li><strong>¿Cómo puedo reservar un servicio? </strong> Puedes reservar un servicio a través de nuestro sitio web seleccionando el servicio deseado, eligiendo la fecha y hora, y proporcionando los detalles de tu solicitud.</li>
                <li><strong>¿Con cuánta antelación debo hacer una reserva? </strong> Recomendamos hacer las reservas con al menos una semana de antelación para asegurar disponibilidad, aunque intentaremos acomodar solicitudes de último minuto si es posible.</li>
                <li><strong>¿Puedo cancelar o modificar mi reserva?</strong>  Sí, puedes cancelar o modificar tu reserva. Por favor, revisa nuestra política de cancelación para obtener más detalles sobre posibles cargos.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>Precios y Pagos</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ol>
                <li><strong> ¿Cuáles son los precios de sus servicios?</strong> Los precios varían según el tipo de servicio, la duración, y la cantidad de personas. Puedes encontrar detalles específicos en la página de cada servicio.</li>
                <li><strong>¿Qué métodos de pago aceptan?</strong>  Aceptamos pagos con tarjetas de crédito, débito y transferencias bancarias. Todos los pagos se realizan de manera segura a través de nuestra plataforma.</li>
                <li><strong> ¿Hay algún costo adicional?</strong>  Todos los costos se detallan al momento de la reserva. En algunos casos, puede haber cargos adicionales por ingredientes especiales o personalizaciones fuera del menú estándar.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <strong>Experiencia y Seguridad</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ol>
                <li><strong>  ¿Quiénes son los chefs?</strong> Nuestros chefs son profesionales experimentados con formación en escuelas de cocina reconocidas y experiencia en restaurantes de alta gama. Puedes ver sus perfiles y calificaciones en nuestro sitio web.</li>
                <li><strong>¿Es seguro tener un chef en mi hogar?</strong>  Sí, todos nuestros chefs pasan por un riguroso proceso de selección que incluye verificaciones de antecedentes y referencias. Tu seguridad y satisfacción son nuestra máxima prioridad.</li>
                <li><strong> ¿Qué medidas se toman para garantizar la higiene y seguridad alimentaria?</strong>  Nuestros chefs siguen estrictos protocolos de higiene y seguridad alimentaria, incluyendo el uso de equipos de protección personal y la desinfección de superficies. </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <strong>Otros</strong>
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ol>
                <li><strong>¿Puedo regalar un servicio de Adopta un Chef?</strong> Sí, ofrecemos tarjetas de regalo que pueden ser usadas para cualquier servicio en nuestra plataforma. Es un regalo perfecto para cumpleaños, aniversarios, y otras ocasiones especiales.</li>
                <li><strong>¿Ofrecen servicios para eventos corporativos?</strong>  Sí, ofrecemos servicios personalizados para eventos corporativos, incluyendo team-building, catas de vino, y cenas ejecutivas. Contáctanos para obtener más información y cotizaciones personalizadas.</li>
              </ol>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default InicioSesionCliente;