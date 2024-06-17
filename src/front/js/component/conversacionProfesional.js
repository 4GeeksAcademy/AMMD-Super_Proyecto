import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const ConversacionUsuario = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedProfessional, setSelectedProfessional] = useState({});
    const [error, setError] = useState(null);
    const [conversaciones, setConversaciones] = useState([]);

    useEffect(() => {
        // Verificar si hay un token válido antes de cargar datos
        if (store.token) {
            actions.cargarProfesionales();
            cargarConversaciones(); // Cargar conversaciones al inicio
        }
    }, [store.token]); // Dependencia de efecto: se ejecutará cada vez que cambie store.token

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogin = async () => {
        try {
            console.log(`Intentando iniciar sesión con email: ${email}`);
            await actions.iniciarSesionProfesional(email, password);
            console.log(`Usuario autenticado, token: ${store.token}`);
            actions.cargarProfesionales();
            cargarConversaciones(); // Cargar conversaciones después de iniciar sesión
        } catch (error) {
            setError(error.message);
            console.error(`Error al iniciar sesión: ${error.message}`);
        }
    };

    const cargarConversaciones = async () => {
        try {
            // Verificar si hay un profesional seleccionado y si tiene un ID válido
            if (selectedProfessional && selectedProfessional.id) {
                const conversaciones = await actions.obtenerConversaciones(selectedProfessional.id);
                setConversaciones(conversaciones);
            } else {
                // Si no hay un profesional seleccionado o no tiene ID válido, limpiar las conversaciones
                setConversaciones([]);
                console.error("Profesional no seleccionado o ID no disponible");
            }
        } catch (error) {
            console.error("Error al cargar conversaciones:", error.message);
        }
    };

    const handleSendMessage = async () => {
        console.log("selectedProfessional:", selectedProfessional);

        // Verificar si se ha seleccionado un profesional y si tiene un ID válido
        if (inputValue.trim() !== "" && selectedProfessional && selectedProfessional.id) {
            console.log("Enviando mensaje con profesional:", selectedProfessional.id);
            // Implementar lógica para enviar mensaje aquí
        } else {
            console.log("Error al enviar mensaje:", "Selecciona un profesional antes de enviar el mensaje.");
            setError("Selecciona un profesional antes de enviar el mensaje.");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    // Verificar si profesionales está inicializado antes de intentar mapearlo
    if (!Array.isArray(store.profesionales)) {
        return <div>Cargando profesionales...</div>; // Mostrar un indicador de carga mientras se obtienen los datos
    }

    return (
        <div className="fondo">
            <div className="container wrap">
                <div className="titulo row">
                    <h1>Conversación</h1>
                    <h2>Usuario y Profesional</h2>
                </div>
                {!store.token ? (
                    <div className="login-container">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
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
                                <option value="">Selecciona un usuario</option>
                                {store.usuarios.map((usuario) => (
                                    <option key={usuario.id} value={JSON.stringify(usuario)}>
                                        {usuario.email}
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
                            <button onClick={handleSendMessage}>Enviar</button>
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div className="conversaciones">
                            <h3>Conversaciones:</h3>
                            <ul>
                                {conversaciones.map((conversacion) => (
                                    <li key={conversacion.id}>{conversacion.mensaje}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConversacionUsuario;
