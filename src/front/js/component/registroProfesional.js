import React, { useState } from "react";

const RegistroProfesional = () => {
    const [profesional, setProfesional] = useState({
        nombre: "",
        email: "",
        password: ""
    });

    const handleRegistro = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profesional)
        };

        fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/crearprofesional", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.msg); // Manejar la respuesta según lo necesario

                // Limpiar el formulario después del registro exitoso
                setProfesional({
                    nombre: "",
                    email: "",
                    password: ""
                });
            })
            .catch((error) => {
                console.error("Error al registrar:", error);
            });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfesional({ ...profesional, [id]: value });
    };
    
    return (
        <form onSubmit={handleRegistro}>
            <div className="row mb-3">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">
                    Nombre
                </label>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre"
                        value={profesional.nombre}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        value={profesional.email}
                        onChange={handleChange}
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
                        value={profesional.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Crear Profesional
            </button>
        </form>
    );
}

export default RegistroProfesional;
