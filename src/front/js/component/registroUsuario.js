import React, { useState } from "react";

const RegistroUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: ""
    });

    const handleRegistro = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        };

        fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/crearusuario", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.msg); // Manejar la respuesta según lo necesario

                // Limpiar el formulario después del registro exitoso
                setUsuario({
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
        setUsuario({ ...usuario, [id]: value });
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
                        value={usuario.nombre}
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
                        value={usuario.email}
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
                        value={usuario.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Crear Usuario
            </button>
        </form>
    );
}

export default RegistroUsuario;
