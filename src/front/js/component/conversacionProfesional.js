import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const ConversacionUsuario = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedProfessional, setSelectedProfessional] = useState({});
    const [error, setError] = useState(null);
    const [usersWithMessages, setUsersWithMessages] = useState([]);

    useEffect(() => {
        if (store.token) {
            actions.cargarProfesionales();
            cargarUsuariosConMensajes();
        }
    }, []); // Asegúrate de ejecutarlo cada vez que cambie store.token o actions

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogin = async () => {
        try {
            console.log(`Intentando iniciar sesión con email: ${email}`);
            await actions.iniciarSesionProfesional(email, password);
            console.log(`Usuario autenticado, token: ${store.token}`);
            actions.cargarProfesionales();
            cargarUsuariosConMensajes();
        } catch (error) {
            setError(error.message);
            console.error(`Error al iniciar sesión: ${error.message}`);
        }
    };

    const cargarUsuariosConMensajes = async () => {
        try {
            const usuariosConMensajes = await actions.obtenerUsuariosConMensajes();
            setUsersWithMessages(usuariosConMensajes);
        } catch (error) {
            console.error("Error al cargar usuarios con mensajes:", error.message);
        }
    };

    const handleSendMessage = async () => {
        console.log("selectedProfessional:", selectedProfessional);

        if (inputValue.trim() !== "" && selectedProfessional && selectedProfessional.id) {
            console.log("Enviando mensaje con profesional:", selectedProfessional.id);
            // Aquí puedes implementar la lógica para enviar el mensaje al profesional seleccionado
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
        return <div>Cargando profesionales...</div>; // Podrías mostrar un spinner u otro indicador de carga
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
                            <button onClick={handleSendMessage}>Enviar</button>
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div className="usuariosConMensajes">
                            <h3>Usuarios con mensajes:</h3>
                            <ul>
                                {usersWithMessages.map((usuario) => (
                                    <li key={usuario.id}>{usuario.nombre}</li>
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
