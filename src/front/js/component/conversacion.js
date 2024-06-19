import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ConversacionUsuario = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedProfessional, setSelectedProfessional] = useState({});
    const [error, setError] = useState(null);
    const [mensajeEnviado, setMensajeEnviado] = useState(false); // Estado para controlar la alerta

    const data = {
        profesional_id: selectedProfessional.id,
        coment_text: inputValue,
        usuario_id: store.usuarios.id
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogin = async () => {
        try {
            console.log(`Intentando iniciar sesión con email: ${email}`);
            await actions.iniciarSesionUsuario(email, password);
            console.log(`Usuario autenticado, token: ${store.token}`);
            actions.cargarProfesionales();
        } catch (error) {
            setError(error.message);
            console.error(`Error al iniciar sesión: ${error.message}`);
        }
    };

    useEffect(() => {
        if (store.token) {
            actions.cargarProfesionales();
            actions.obtenerConversaciones();
        }
    }, [store.token]);

    const handleSendMessage = async (data) => {
        console.log("selectedProfessional:", selectedProfessional);

        if (inputValue.trim() !== "" && selectedProfessional && selectedProfessional.id) {
            console.log("Enviando mensaje con profesional:", selectedProfessional.id);
            await actions.crearConversacion(data); // Esperar a que se cree la conversación
            setMensajeEnviado(true); // Mostrar alerta de mensaje enviado
            setTimeout(() => {
                setMensajeEnviado(false); // Ocultar la alerta después de 3 segundos
            }, 3000);
            setInputValue(""); // Limpiar el campo de texto después de enviar el mensaje
        } else {
            console.log("Error al enviar mensaje:", "Selecciona un profesional antes de enviar el mensaje.");
            setError("Selecciona un profesional antes de enviar el mensaje.");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage(data);
        }
    };

    const handleVolver = () => {
        navigate('/privadacliente');
    };

    // Función para agrupar conversaciones por email del profesional
    const agruparConversacionesPorProfesional = (conversaciones) => {
        const groupedConversaciones = {};
        conversaciones.forEach(conversacion => {
            const userEmail = conversacion.profesional?.email || "Profesional desconocido";
            if (!groupedConversaciones[userEmail]) {
                groupedConversaciones[userEmail] = [];
            }
            groupedConversaciones[userEmail].push(conversacion);
        });
        return groupedConversaciones;
    };

    // Función para determinar si un mensaje es el último dentro de su grupo
    const esUltimoMensaje = (emailKey, conversacion) => {
        const conversacionesProfesional = conversacionesPorProfesional[emailKey];
        return conversacion === conversacionesProfesional[conversacionesProfesional.length - 1];
    };

    // Obtener las conversaciones del usuario autenticado
    const conversacionesUsuario = store.conversaciones.filter(conversacion => conversacion.usuario_id === store.usuarios.id);

    // Agrupar conversaciones por email del profesional y determinar el último mensaje
    const conversacionesPorProfesional = agruparConversacionesPorProfesional(conversacionesUsuario);

    return (
        <div className="fondo">
            <div className="container wrap">
                <div className="titulo row">
                    <h1>Conversación</h1>
                    <h2>Habla con los profesionales</h2>
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
                        <div className="inputTarea">
                            <select onChange={(e) => setSelectedProfessional(JSON.parse(e.target.value))}>
                                <option value="">Selecciona un profesional</option>
                                {store.profesionales.map((professional) => (
                                    <option key={professional.id} value={JSON.stringify(professional)}>
                                        {professional.email}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe tu mensaje..."
                            />
                            <button onClick={() => handleSendMessage(data)}>Enviar</button>
                        </div>
                        {error && <div className="error">{error}</div>}
                        {/* Alerta de mensaje enviado */}
                        {mensajeEnviado && <div className="alerta">Mensaje enviado correctamente</div>}
                        <div className="conversaciones">
                            <h3>Conversaciones:</h3>
                            {Object.keys(conversacionesPorProfesional).map((emailKey) => {
                                const conversacionesProfesional = conversacionesPorProfesional[emailKey];
                                return (
                                    <div key={emailKey}>
                                        <h4>Profesional: {emailKey}</h4>
                                        <ul>
                                            {conversacionesProfesional.map((conversacion) => (
                                                <li key={conversacion.id}>
                                                    <div><strong>De:</strong> {conversacion.usuario?.email || "Usuario desconocido"}</div>
                                                    {esUltimoMensaje(emailKey, conversacion) && (
                                                        <span className="ultimo-mensaje-text">Último mensaje: </span>
                                                    )}
                                                    <div>{conversacion.coment_text}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                <button type="button" className="btn volver" onClick={handleVolver}>VOLVER</button>
            </div>
        </div>
    );
};

export default ConversacionUsuario;
