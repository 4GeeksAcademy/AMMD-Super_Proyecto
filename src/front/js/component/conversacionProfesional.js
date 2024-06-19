import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ConversacionProfesional = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedConversacion, setSelectedConversacion] = useState(null); // Estado para la conversación seleccionada
    const [error, setError] = useState(null);
    const [respuesta, setRespuesta] = useState(""); // Estado para la respuesta

    useEffect(() => {
        if (store.token) {
            actions.cargarProfesionales();
        }
        actions.obtenerConversaciones();
    }, []);

    const handleLogin = async () => {
        try {
            console.log(`Intentando iniciar sesión con email: ${email}`);
            await actions.iniciarSesionProfesional(email, password);
            console.log(`Profesional autenticado, token: ${store.token}`);
            actions.cargarProfesionales();
        } catch (error) {
            setError(error.message);
            console.error(`Error al iniciar sesión: ${error.message}`);
        }
    };

    const handleSelectConversacion = (conversacion) => {
        setSelectedConversacion(conversacion);
    };

    const handleResponseChange = (event) => {
        setRespuesta(event.target.value);
    };

    const handleSendResponse = async () => {
        if (selectedConversacion && respuesta.trim() !== "") {
            const data = {      
                profesional_id: selectedConversacion.profesional_id,
                coment_text: respuesta,
                usuario_id: selectedConversacion.usuario_id
            }
            await actions.crearConversacion(data);
            setRespuesta(""); // Limpiar el campo de respuesta
        } else {
            setError("Selecciona una conversación y escribe una respuesta antes de enviar.");
        }
    };

    if (!Array.isArray(store.profesionales)) {
        return <div>Cargando profesionales...</div>;
    }

    const handleVolver = () => {
        navigate('/privadacliente');
    };

    // Función para agrupar conversaciones por el email del usuario
    const groupConversationsByUser = (conversaciones) => {
        const groupedConversaciones = {};
        conversaciones.forEach(conversacion => {
            const userEmail = conversacion.usuario?.email || "Usuario desconocido";
            if (!groupedConversaciones[userEmail]) {
                groupedConversaciones[userEmail] = [];
            }
            groupedConversaciones[userEmail].push(conversacion);
        });
        return groupedConversaciones;
    };

    // Función para determinar si un mensaje es el último dentro de su grupo
    const esUltimoMensaje = (emailKey, conversacion) => {
        const conversacionesUsuario = conversacionesAgrupadas[emailKey];
        return conversacion === conversacionesUsuario[conversacionesUsuario.length - 1];
    };

    const conversacionesAgrupadas = groupConversationsByUser(store.conversaciones);

    return (
        <div className="fondo">
            <div className="container wrap">
                <div className="titulo row">
                    <h1>Conversaciones</h1>
                    <h2>Revisa el estado de tus conversaciones</h2>
                </div>
                {!store.token ? (
                    <div className="login-container">
                        <input
                            type="email"
                            placeholder="Escribe tu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Escribe tu Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Iniciar sesión</button>
                        {error && <div className="error">{error}</div>}
                    </div>
                ) : (
                    <div>
                        {/* Renderización de conversaciones agrupadas */}
                        {Object.keys(conversacionesAgrupadas).map((emailKey, index) => (
                            <div key={index} className="conversaciones">
                                <h3>Conversaciones de {emailKey}:</h3>
                                <ul>
                                    {conversacionesAgrupadas[emailKey].map((conversacion, idx) => (
                                        <li
                                            key={conversacion.id}
                                            onClick={() => handleSelectConversacion(conversacion)}
                                        >
                                            {esUltimoMensaje(emailKey, conversacion) && (
                                                <span className="ultimo-mensaje-text">Último mensaje: </span>
                                            )}
                                            <div>{conversacion.coment_text}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {selectedConversacion && (
                            <div className="respuesta">
                                <h4>Responde a la conversación seleccionada:</h4>
                                <input
                                    type="text"
                                    value={respuesta}
                                    onChange={handleResponseChange}
                                    placeholder="Escribe tu respuesta..."
                                />
                                <button onClick={handleSendResponse}>Enviar respuesta</button>
                            </div>
                        )}
                        {error && <div className="error">{error}</div>}
                    </div>
                )}
            </div>
            <button type="button" className="btn volver" onClick={handleVolver}>VOLVER</button>
        </div>
    );
};

export default ConversacionProfesional;
