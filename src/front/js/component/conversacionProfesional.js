import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const ConversacionProfesional = () => {
    const { store, actions } = useContext(Context);

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

    useEffect(() => {
        console.log(store.conversaciones);
    }, [store.conversaciones]);

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
                coment_text : respuesta,
                usuario_id : selectedConversacion.usuario_id
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
                        <div className="conversaciones">
                            <h3>Conversaciones:</h3>
                            <ul>
                                {store.conversaciones.map((conversacion) => (
                                    <li key={conversacion.id} onClick={() => handleSelectConversacion(conversacion)}>
                                        <div><strong>De:</strong> {conversacion.usuario?.email || "Usuario desconocido"}</div>
                                        <div>{conversacion.coment_text}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {selectedConversacion && (
                            <div className="respuesta">
                                <h4>Responde a la conversación seleccionada:</h4>
                                <div><strong>De:</strong> {selectedConversacion.usuario?.email || "Usuario desconocido"}</div>
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
        </div>
    );
};

export default ConversacionProfesional;
