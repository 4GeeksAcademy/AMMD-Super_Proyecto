import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const BASE_URL = process.env.BACKEND_URL;

    const handleUpdatePassword = async () => {
        try {
            const response = await fetch (`${BASE_URL}/api/resetpassword/${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ password })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Tu contraseña ha sido actualizada.");
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
                <div className="card-header h5 text-white bg-primary">Reset Your Password</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Enter your new password below.
                    </p>
                    <div data-mdb-input-init className="form-outline">
                        <input 
                            type="password" 
                            id="typePassword" 
                            className="form-control my-3" 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                        <label className="form-label" htmlFor="typePassword">New Password</label>
                    </div>
                    <button 
                        onClick={handleUpdatePassword} 
                        className="btn btn-primary w-100"
                    >
                        Update Password
                    </button>
                    {message && <p className="mt-3">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
