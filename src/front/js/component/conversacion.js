import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const CrearConversacion = ({ profesional_id, usuario_id }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [mensaje, setMensaje] = useState("");
  const [remite, setRemite] = useState("usuario");

  const handleEnviarMensaje = (e) => {
    e.preventDefault();
    // Verifica si el usuario está autenticado
    if (!store.isAuthenticated) {
      // Redirecciona al usuario a la página de inicio de sesión si no está autenticado
      navigate("/login");
      return;
    }
    // Llama a la función para crear la conversación
    crearConversacion(profesional_id, usuario_id, mensaje);
    // Limpia el estado del mensaje después de enviarlo
    setMensaje("");
  };

  return (
    <div>
      <h2>Crear Conversación</h2>
      <form onSubmit={handleEnviarMensaje}>
        <div>
          <label>
            Mensaje:
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Remite:
            <select value={remite} onChange={(e) => setRemite(e.target.value)}>
              <option value="usuario">Usuario</option>
              <option value="profesional">Profesional</option>
            </select>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

CrearConversacion.propTypes = {
  usuario_id: PropTypes.number.isRequired,
  profesional_id: PropTypes.number.isRequired,
};

export default CrearConversacion;
