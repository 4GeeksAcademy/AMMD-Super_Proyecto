import React from 'react';
import "../../styles/sobreNosotros.css";
import logoammd from "../../img/logoammd.png"
import Manu from "../../img/Manu.png"
import Ainhoa from "../../img/Ainhoa.jpg"
import David from "../../img/David.jpg"
import Miguel from "../../img/Miguel.jpg"

const SobreNosotros = () => {
  return (
    <div className="container-sobre-nosotros">
      <div className="container text-center">
        <div className="row">
          <div className="col-9 tituloSobreNosotros">
            <h1 style={{marginBottom: '20px'}}>SOMOS AMMD DEVELOPERS</h1>
            <h5>En AMMD Developers, somos un equipo apasionado de desarrolladores web dedicados a transformar ideas innovadoras en realidades digitales sostenibles. Nuestro amor por la innovación nos impulsa a crear proyectos que no solo destacan por su creatividad y funcionalidad, sino también por su impacto positivo en el medio ambiente y la sociedad.</h5>
          </div>
          <div className="col-3">
            <img src={logoammd} alt="logo_adoptaunchef" style={{ height: '300px', width: 'auto' }}></img>
          </div>
        </div>
      </div>
      <h2 style={{marginBottom: '20px'}}>EL EQUIPO</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <div className="card" style={{width: '18rem'}}>
              <img src={Ainhoa} className="card-img-top" alt="Ainhoa"></img>
              <div className="card-body">
                <h5 className="card-title">Ainhoa</h5>
                <h5 className="card-text">Desarrolladora Web en AMMD. Con varios años de experiencia en el desarrollo de soluciones web innovadoras y un firme compromiso con la mejora continua.</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{width: '18rem'}}>
              <img src={Manu} className="card-img-top" alt="Manu"></img>
              <div className="card-body">
                <h5 className="card-title">Manu</h5>
                <h5 className="card-text">Soy un desarrollador Full-Stack con más de 15 años de experiencia en administracion en las Fuerzas Armadas. Hago uso de mis habilidades técnicas para crear soluciones tecnológicas eficientes.</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{width: '18rem'}}>
              <img src={Miguel} className="card-img-top" alt="Miguel" />
              <div className="card-body">
                <h5 className="card-title">Miguel</h5>
                <h5 className="card-text">Desarrollador full stack con experiencia en administración de empresas y 15 años en logística, comercio internacional y ventas. Combino habilidades técnicas y empresariales para crear soluciones tecnológicas eficientes.</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{width: '18rem'}}>
              <img src={David} className="card-img-top" alt="David" />
              <div className="card-body">
                <h5 className="card-title">David</h5>
                <h5 className="card-text">¡Hola! Soy David, un desarrollador Full Stack con 25 años de experiencia como chef. Mi carrera en la gastronomía me ha enseñado la importancia de la creatividad, la precisión y el trabajo bajo presión.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2 style={{marginBottom: '20px'}}>¿ QUÉ NOS HACE ÚNICOS ?</h2>
      <ol style={{marginBottom: '50px'}}>
        <li><strong>Innovación Constante:</strong> En AMMD Developers, nos mantenemos a la vanguardia de las tendencias tecnológicas, siempre explorando nuevas herramientas y metodologías para ofrecer soluciones únicas y eficientes.</li>
        <li><strong>Sostenibilidad:</strong> Nos comprometemos a desarrollar proyectos que respeten el medio ambiente. Creemos que la tecnología y la sostenibilidad deben ir de la mano, y trabajamos arduamente para minimizar nuestra huella ecológica.</li>
        <li><strong>Proyectos a Medida:</strong> Entendemos que cada cliente es único, por lo que nos esforzamos en crear soluciones personalizadas que se adapten perfectamente a sus necesidades y objetivos.</li>
      </ol>
      
      <h2 style={{marginBottom: '20px'}}>NUESTROS SERVICIOS</h2>
      <ol style={{marginBottom: '50px'}}>
        <li><strong>Desarrollo Web:</strong> Creamos sitios web atractivos y funcionales que ayudan a nuestros clientes a destacar en el competitivo mundo digital.</li>
        <li><strong>Desarrollo de Aplicaciones:</strong> Desde aplicaciones móviles hasta plataformas complejas, nuestro equipo tiene la experiencia y el conocimiento para llevar su proyecto del concepto a la realidad.</li>
        <li><strong>Consultoría Tecnológica:</strong> Ofrecemos asesoramiento experto para ayudar a nuestros clientes a tomar decisiones informadas sobre sus proyectos tecnológicos.</li>
        <li><strong>Optimización SEO:</strong> Mejoramos la visibilidad de su sitio web en los motores de búsqueda, asegurando que su audiencia objetivo lo encuentre fácilmente.</li>
      </ol>
      
      <h2 style={{marginBottom: '20px'}}>NUESTRA MISIÓN</h2>
      <p style={{marginBottom: '50px'}}>En AMMD Developers, nuestra misión es impulsar la innovación y la sostenibilidad a través de la tecnología. Nos dedicamos a construir un futuro digital que sea tanto emocionante como responsable. Cada proyecto que emprendemos es una oportunidad para contribuir a un mundo mejor, utilizando nuestra experiencia y creatividad para desarrollar soluciones que marquen la diferencia.</p>
      
      <h2>ÚNASE A NOSOTROS</h2>
      <p>Ya sea que esté buscando desarrollar un nuevo proyecto, optimizar su presencia en línea o simplemente necesite asesoramiento tecnológico, estamos aquí para ayudar. En AMMD Developers, estamos listos para colaborar con usted y llevar sus ideas al siguiente nivel.</p>
      <p>¡Hablemos sobre cómo podemos innovar juntos!</p>
    </div>
  );
};

export default SobreNosotros;