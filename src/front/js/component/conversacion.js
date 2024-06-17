import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const ConversacionUsuario = () => {
    const { store, actions } = useContext(Context);

    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedProfessional, setSelectedProfessional] = useState({});
    const [error, setError] = useState(null);


    const data = {      
        profesional_id: selectedProfessional.id,
        coment_text : inputValue,
        usuario_id : store.usuarios.id
    }

    useEffect(()=>{
        console.log(data)  
        console.log(selectedProfessional)     
    },[data])

    useEffect(() => {
        if (store.token) {
            actions.cargarProfesionales();
        }
    }, []); // Asegúrate de ejecutarlo cada vez que cambia store.token

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
    
    const handleSendMessage = async (data) => {
        console.log("selectedProfessional:", selectedProfessional);
    
        if (inputValue.trim() !== "" && selectedProfessional && selectedProfessional.id) {
            console.log("Enviando mensaje con profesional:", selectedProfessional.id);
        
        } else {
            console.log("Error al enviar mensaje:", "Selecciona un profesional antes de enviar el mensaje.");
            setError("Selecciona un profesional antes de enviar el mensaje.");
        }
        console.log(data)
        actions.crearConversacion(data)
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

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
                            <button onClick={()=>handleSendMessage(data)}>Enviar</button>
                        </div>
                        {error && <div className="error">{error}</div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConversacionUsuario;
