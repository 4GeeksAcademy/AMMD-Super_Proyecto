import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useLocation, useNavigate } from "react-router-dom";

const EditarUsuario = () => {
    const { actions } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const usuario = location.state?.usuario;

    const [formData, setFormData] = useState({
        email: "",
        password: "",  // No mostrar contraseña
        nombre: "",
        apellidos: "",
        telefono: "",
        localizacion: "",
        longitud: "",
        latitud: "",
        direccion: "",
        foto_de_perfil: "",
        tipo_de_dieta: "",
        alergias: ""
    });

    useEffect(() => {
        if (usuario) {
            setFormData({
                email: usuario.email || "",
                password: "",  // No mostrar contraseña
                nombre: usuario.nombre || "",
                apellidos: usuario.apellidos || "",
                telefono: usuario.telefono || "",
                localizacion: usuario.localizacion || "",
                longitud: usuario.longitud || "",
                latitud: usuario.latitud || "",
                direccion: usuario.direccion || "",
                foto_de_perfil: usuario.foto_de_perfil || "",
                tipo_de_dieta: usuario.tipo_de_dieta || "",
                alergias: usuario.alergias || ""
            });
        }
    }, [usuario]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Filtrar los datos cambiados
        const dataToSend = {};
        for (let key in formData) {
            if (formData[key] !== "" && formData[key] !== null) {
                dataToSend[key] = formData[key];
            }
        }

        actions.editarUsuario(dataToSend)
            .then(result => {
                if (result) {
                    window.alert("Usuario editado con éxito");
                    navigate("/privadacliente");  // Cambia "/ruta-de-vista-privada" por la ruta real de tu vista privada
                }
            })
            .catch(error => {
                console.error("Error al editar el usuario", error);
            });
    };

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img
                            src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Descripción de la imagen"
                            width="250"
                            height="300"
                        />
                    </div>
                    <div className="col">
                        <button
                            type="button"
                            className="btn"
                            onClick={handleSubmit}
                        >
                            Confirmar cambios
                        </button>
                        <br />
                        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                        <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
                        <input type="text" name="nombre" value={formData.nombre} placeholder="Nombre" onChange={handleChange} />
                        <input type="text" name="apellidos" value={formData.apellidos} placeholder="Apellidos" onChange={handleChange} />
                        <input type="text" name="telefono" value={formData.telefono} placeholder="Teléfono" onChange={handleChange} />
                        <input type="text" name="localizacion" value={formData.localizacion} placeholder="Localización" onChange={handleChange} />
                        <input type="text" name="longitud" value={formData.longitud} placeholder="Longitud" onChange={handleChange} />
                        <input type="text" name="latitud" value={formData.latitud} placeholder="Latitud" onChange={handleChange} />
                        <input type="text" name="direccion" value={formData.direccion} placeholder="Dirección" onChange={handleChange} />
                        <input type="text" name="foto_de_perfil" value={formData.foto_de_perfil} placeholder="Foto de perfil" onChange={handleChange} />
                        <input type="text" name="tipo_de_dieta" value={formData.tipo_de_dieta} placeholder="Tipo de dieta" onChange={handleChange} />
                        <input type="text" name="alergias" value={formData.alergias} placeholder="Alergias" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="container">
                <h4>Política de privacidad</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
                </p>
            </div>
        </div>
    );
};

export default EditarUsuario;
