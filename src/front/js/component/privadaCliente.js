import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buscador from './buscador';
import "../../styles/privadaCliente.css";
import "../../styles/MiComponente.css"

import { Context } from '../store/appContext';

const PrivadaCliente = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [usuarioId, setUsuarioId] = useState(null); // Estado local para almacenar el usuarioId

  useEffect (() => {
    // actions.cargarProfesional(store.profesionalSeleccionado.id)
    console.log(store.usuarios, "usuario")
  },[store.usuarios])
  
  useEffect(() => {
    if (store.usuarios && store.usuarios.id) {
      setUsuarioId(store.usuarios.id);
      actions.cargarUsuario()
    }
  }, [store.usuarios]);  

  const handleEditar = () => {
    navigate('/editarusuario', { state: { usuario: store.usuarios } });
  };

  const handleServiciosContratadosUsuario = () => {
    navigate('/servicioscontratadosusuario', { state: { usuario: store.usuarios } });
  };

  const handleCerrarSesion = () => {
    
    navigate('/'); 
  };

  const handleServicio = () => {
   
    navigate('/servicioscontratadosusuario'); 
  };

  const handleEliminar = () => {
    actions.eliminarUsuario();
    setTimeout(() => {
      navigate('/');
    }, 1000); // Espera 1 segundo antes de redirigir
  };
  
  const handleHablar = () => {   
    navigate('/conversacion'); 
  };

  return (
    <div>
      <button type="button" className="btn cerrar-cliente" style={{ position: 'absolute', top: 335, right: 0 }}  onClick={handleCerrarSesion}>CERRAR </button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="350" 
              height="450" 
            />
          </div>
          
          <div className="col">                            
            <h3>Hola !!!</h3>
            <br />
            <p className="editable-placeholder" data-placeholder="Nombre: "> {store.usuarios.nombre}</p>
            <p className="editable-placeholder" data-placeholder="Apellidos: "> {store.usuarios.apellidos} </p>
            <p className="editable-placeholder" data-placeholder="Email: "> {store.usuarios.email} </p>
            <p className="editable-placeholder" data-placeholder="Dirección: "> {store.usuarios.direccion}</p>          
            <p className="editable-placeholder" data-placeholder="País: "> </p>
            <p className="editable-placeholder" data-placeholder="Población: "> {store.usuarios.localizacion}</p>
            <p className="editable-placeholder" data-placeholder="Codigo Postal: "> </p>
            <p className="editable-placeholder" data-placeholder="Alergias: "> {store.usuarios.alergias} </p>
            <button type="button" className="btn eliminar-cliente"    onClick={handleServiciosContratadosUsuario}>SERVICIOS CONTRATADOS</button>
            <button type="button" className="btn eliminar-cliente"    onClick={handleHablar}>HABLA CON UN CLIENTE</button>
            <button 
              type="button"
              className="btn editar-cliente"
              onClick={handleEditar}
              >
                EDITAR
            </button>      
                      
            <button type="button" className="btn eliminar-cliente"    onClick={handleEliminar}>ELIMINAR</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong><h2>Política de Privacidad</h2></strong> 
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>El presente Política de Privacidad establece los términos en que usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Información que es recogida</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item"> 
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Uso de la información recogida</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>
                <p>Está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>Cookies </strong>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p>
                <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente noticias. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <strong>Enlaces a Terceros </strong>
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <strong>Control de su información personal</strong>
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p>

                <p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>

                <p>Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
              </div>
            </div>
          </div>
        </div>              
      </div>
    </div>
  );
};

export default PrivadaCliente;
