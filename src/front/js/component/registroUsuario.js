import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/registroUsuario.css";



require('dotenv').config();
const BASE_URL = process.env.BACKEND_URL;

const RegistroUsuario = () => {
    const { store, actions } = useContext(Context);
    const [formValue, setFormValue] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function onChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        setFormValue({ ...formValue, [id]: value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        actions.crearUsuario(formValue.email, formValue.password)
        navigate("/iniciosesioncliente")
    }
    
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        value={formValue.email}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Contraseña
                </label>
                <div className="col-sm-10">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        value={formValue.password}
                        onChange={onChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) =>handleSubmit(e) }>
                Crear Usuario
            </button>
        </form>
    );
}

export default RegistroUsuario;