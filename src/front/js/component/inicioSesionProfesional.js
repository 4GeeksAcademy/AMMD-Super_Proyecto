import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/inicioSesionProfesional.css";


import "../../styles/iniciarSesionCliente.css"

const InicioSesionProfesional = () => {
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
        const loggedin = await actions.iniciarSesionProfesional(formValue.email, formValue.password);
        if (loggedin) {
            navigate("/privadaprofesional");
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
      <div className="login wrap" style={{marginBottom: '50px'}}>
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
        <h4 style={{marginBottom: '20px'}}>¿No tienes cuenta y quieres formar parte de nuestro equipo?</h4>
      </div>
      <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
        <div className="container registra-aqui" style={{ marginRight: '20px' }}>
          <div className="row align-items-center">
            <div className="col-auto">
              <p className="mb-0">Regístrate haciendo click</p>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn"
                onClick={() => navigate(`/registrousuario`)}>
                ¡Aquí!
              </button>
            </div>
          </div>
        </div>
        <div className="container recuperala">
          <div className="row align-items-center">
            <div className="col-auto">
              <p className="mb-0">¿Has perdido tu contraseña?</p>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn"
                onClick={() => navigate(`/reestablecercontrasena`)}
              >
                Recupérala
              </button>
            </div>
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
                <li><strong>¿Cómo puedo ofrecer mis servicios en la plataforma? </strong> Una vez registrado y aprobado, podrás listar los servicios que ofreces, establecer tus tarifas, y definir tu disponibilidad. Los clientes podrán reservar tus servicios directamente a través de tu perfil.</li>
                <li><strong>¿Cómo se gestionan las reservas?</strong>  Recibirás notificaciones de nuevas reservas a través de nuestra plataforma. Podrás aceptar, rechazar o solicitar modificaciones a las reservas según tu disponibilidad y preferencias.</li>
                <li><strong>¿Qué pasa si necesito cancelar una reserva?</strong> Si necesitas cancelar una reserva, debes hacerlo lo antes posible a través de la plataforma. Ten en cuenta que las cancelaciones frecuentes pueden afectar tu reputación en la plataforma.</li>
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
              <strong>Pagos y Tarifas</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ol>
                <li><strong> ¿Cómo y cuándo recibiré los pagos? </strong>Los pagos se procesan a través de nuestra plataforma. Recibirás el pago por tus servicios una vez que el servicio haya sido completado y el cliente haya confirmado su satisfacción. Los pagos se depositan en tu cuenta bancaria registrada.</li>
                <li><strong> ¿Qué comisiones aplica Adopta un Chef? </strong> Adopta un Chef cobra una comisión sobre cada reserva confirmada. La comisión cubre los costos de la plataforma, marketing y soporte. Puedes encontrar detalles específicos sobre las comisiones en nuestros términos y condiciones.</li>
                <li><strong> ¿Puedo establecer mis propias tarifas?</strong>  Sí, puedes establecer tus propias tarifas para los servicios que ofreces. Recomendamos investigar tarifas de otros profesionales en la plataforma para establecer precios competitivos. </li>
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

export default InicioSesionProfesional;
