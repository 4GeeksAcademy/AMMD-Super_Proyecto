import React, { useState } from "react";
import "../../styles/restablecerContrasena.css";



const RequestPasswordReset = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const BASE_URL = process.env.BACKEND_URL; // Verifica que la variable esté correctamente definida
    console.log('BASE_URL:', BASE_URL); // Verificar el valor de BASE_URL

    const handleResetPassword = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/resetpassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Se ha enviado un correo con las instrucciones para restablecer tu contraseña.");
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="text-center" style={{ width: "300px" }}>
                <div className="card-header h5 text-white bg-primary">RESTABLECER CONTRASEÑA</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                    Ingrese su dirección de correo electrónico y le enviaremos un correo con instrucciones para restablecer su contraseña.
                    </p>
                    <div data-mdb-input-init className="form-outline">
                        <input 
                            type="email" 
                            id="typeEmail" 
                            className="form-control my-3" 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                        <label className="form-label" htmlFor="typeEmail">Entrada de Correo Electrónico</label>
                    </div>
                    <button 
                        onClick={handleResetPassword} 
                        className="btn w-100"
                    >
                        RESTABLECER CONTRASEÑA
                    </button>
                    {message && <p className="mt-3">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default RequestPasswordReset;
