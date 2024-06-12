import React from 'react';
import "../../styles/privadaProfesional.css";
import "../../styles/MiComponente.css"
import { useNavigate } from "react-router-dom";
import Buscador from './buscador';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useState,useEffect } from 'react';


const PrivadaProfesional = () => {
   const navigate = useNavigate();
   const{store,actions}= useContext(Context)

useEffect (() => {
  // actions.cargarProfesional(store.profesionalSeleccionado.id)
  console.log(store.profesionales, "profesional")
},[store.profesionales])

const handleServiciosContratadosProfesional = () => {
  navigate('/servicioscontratadosprofesional', { state: { profesional: store.profesionales } });
};

const handleEditar = () => {
  navigate('/editarprofesional', { state: { profesional: store.profesionales } });
};

const handleCerrarSesion = () => {
  actions.cerrarSesionProfesional();
  navigate('/'); 
};

const handleEliminar = () => {
  actions.eliminarProfesional();
  navigate('/'); 
};


const handleServicio = () => { 
  navigate('/servicioscontratadosprofesional'); 
};

const handleCrearOrden = () => { 
  navigate('/ordenservicio'); 
};


  return (
    <div>
      <button type="button" className="btn cerrar-profesional" style={{ position: 'absolute', top: 335, right: 0 }}  onClick={handleCerrarSesion}>CERRAR </button>
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
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Nombre: ">{profesionalEncontrado?.nombre}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Apellidos: ">{profesionalEncontrado?.apellidos}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Email: ">{profesionalEncontrado?.email}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Descripción: ">{profesionalEncontrado?.descripcion}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Información Adicional: ">{profesionalEncontrado?.info_adicional}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Población: ">{profesionalEncontrado?.localizacion}</p>
            <p className="editable-placeholder" contentEditable="true" data-placeholder="Tipo de servicio Chef: ">{profesionalEncontrado?.tipo_servicio_chef}</p>
            <button type="button" className="btn editar-profesional"  onClick={handleEditar}>EDITAR</button>
            <button type="button" className="btn eliminar-profesional"  onClick={handleEliminar}>ELIMINAR</button>
            <button type="button" className="btn "  onClick={handleCrearOrden}>CREAR ORDEN DE SERVICIO</button>
            <button type="button" className="btn "  onClick={handleServicio}>ESTADO DE TUS SERVICIOS</button>
            </div>
        </div>
      </div>

      <div className="container">
      <h1>Política de Privacidad</h1>
    <p>El presente Política de Privacidad establece los términos en que usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>

    <h2>Información que es recogida</h2>
    <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p>

    <h2>Uso de la información recogida</h2>
    <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>

    <p>Está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>

    <h2>Cookies</h2>
    <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p>

    <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente noticias. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>

    <h2>Enlaces a Terceros</h2>
    <p>Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>

    <h2>Control de su información personal</h2>
    <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p>

    <p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>

    <p>Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
      </div>
    </div>
  );
}

export default PrivadaProfesional;