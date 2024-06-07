import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useLocation ,useNavigate} from "react-router-dom";

const EditarProfesional = () => {
    const { actions } = useContext(Context);
    const location = useLocation();
    const usuario = location.state?.usuario;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",  
        nombre: "",
        apellidos: "",
        telefono: "",
        localizacion: "",
        direccion: "",
        foto_de_perfil: "",
        descripcion: "",
        info_adicional: "",
        tipo_de_profesional: "",
        tipo_de_cocina_especialidad: "",
        tipo_servicio_chef_pica_pica: "",
        tipo_servicio_chef_taller_de_cocina: "",
        tipo_servicio_chef_comida_de_trabajo: "",
        tipo_servicio_chef_servicio_degustacion: "",
        tipo_servicio_chef_comida_informal: "",
        tipo_servicio_chef_bacthcooking: "",
        tipo_servicio_jamonero_corte: "",
        tipo_servicio_jamonero_clase_corte: "",
        tipo_servicio_sumiller_maridaje: "",
        tipo_servicio_sumiller_cata: "",
        tipo_servicio_pastelero_clase: "",
        tipo_servicio_pastelero_desayuno: "",
        tipo_servicio_pastelero_merienda: "",
        tipo_servicio_barman_barra: "",
        tipo_servicio_barman_clase: "",
        is_active: true
    });

    useEffect(() => {
        if (usuario) {
            setFormData({
                email: usuario.email || "",
                password: "",  
                nombre: usuario.nombre || "",
                apellidos: usuario.apellidos || "",
                telefono: usuario.telefono || "",
                localizacion: usuario.localizacion || "",
                direccion: usuario.direccion || "",
                foto_de_perfil: usuario.foto_de_perfil || "",
                descripcion: usuario.descripcion || "",
                info_adicional: usuario.info_adicional || "",
                tipo_de_profesional: usuario.tipo_de_profesional || "",
                tipo_de_cocina_especialidad: usuario.tipo_de_cocina_especialidad || "",
                tipo_servicio_chef_pica_pica: usuario.tipo_servicio_chef_pica_pica || "",
                tipo_servicio_chef_taller_de_cocina: usuario.tipo_servicio_chef_taller_de_cocina || "",
                tipo_servicio_chef_comida_de_trabajo: usuario.tipo_servicio_chef_comida_de_trabajo || "",
                tipo_servicio_chef_servicio_degustacion: usuario.tipo_servicio_chef_servicio_degustacion || "",
                tipo_servicio_chef_comida_informal: usuario.tipo_servicio_chef_comida_informal || "",
                tipo_servicio_chef_bacthcooking: usuario.tipo_servicio_chef_bacthcooking || "",
                tipo_servicio_jamonero_corte: usuario.tipo_servicio_jamonero_corte || "",
                tipo_servicio_jamonero_clase_corte: usuario.tipo_servicio_jamonero_clase_corte || "",
                tipo_servicio_sumiller_maridaje: usuario.tipo_servicio_sumiller_maridaje || "",
                tipo_servicio_sumiller_cata: usuario.tipo_servicio_sumiller_cata || "",
                tipo_servicio_pastelero_clase: usuario.tipo_servicio_pastelero_clase || "",
                tipo_servicio_pastelero_desayuno: usuario.tipo_servicio_pastelero_desayuno || "",
                tipo_servicio_pastelero_merienda: usuario.tipo_servicio_pastelero_merienda || "",
                tipo_servicio_barman_barra: usuario.tipo_servicio_barman_barra || "",
                tipo_servicio_barman_clase: usuario.tipo_servicio_barman_clase || "",
                is_active: true
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

        actions.editarUsuario(formData)
            .then(result => {
                if (result) {
                    window.alert("Usuario editado con éxito");
                    navigate("/privadaprofesional");
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
                            width="300"
                            height="300"
                        />
                    </div>
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-primary"
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
                        <input type="text" name="direccion" value={formData.direccion} placeholder="Dirección" onChange={handleChange} />
                        <input type="text" name="foto_de_perfil" value={formData.foto_de_perfil} placeholder="Foto de perfil" onChange={handleChange} />
                        <input type="text" name="descripcion" value={formData.descripcion} placeholder="Descripción" onChange={handleChange} />
                        <input type="text" name="info_adicional" value={formData.info_adicional} placeholder="Información Adicional" onChange={handleChange} />
                        <input type="text" name="tipo_de_profesional" value={formData.tipo_de_profesional} placeholder="Tipo de Profesional" onChange={handleChange}/>
                        <input type="text" name="tipo_de_cocina_especialidad" value={formData.tipo_de_cocina_especialidad} placeholder="Especialidad de Cocina" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_pica_pica" value={formData.tipo_servicio_chef_pica_pica} placeholder="Servicio Chef Pica Pica" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_taller_de_cocina" value={formData.tipo_servicio_chef_taller_de_cocina} placeholder="Servicio Chef Taller de Cocina" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_comida_de_trabajo" value={formData.tipo_servicio_chef_comida_de_trabajo} placeholder="Servicio Chef Comida de Trabajo" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_servicio_degustacion" value={formData.tipo_servicio_chef_servicio_degustacion} placeholder="Servicio Chef Servicio Degustación" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_comida_informal" value={formData.tipo_servicio_chef_comida_informal} placeholder="Servicio Chef Comida Informal" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_chef_bacthcooking" value={formData.tipo_servicio_chef_bacthcooking} placeholder="Servicio Chef Batchcooking" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_jamonero_corte" value={formData.tipo_servicio_jamonero_corte} placeholder="Servicio Jamonero Corte" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_jamonero_clase_corte" value={formData.tipo_servicio_jamonero_clase_corte} placeholder="Servicio Jamonero Clase de Corte" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_sumiller_maridaje" value={formData.tipo_servicio_sumiller_maridaje} placeholder="Servicio Sumiller Maridaje" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_sumiller_cata" value={formData.tipo_servicio_sumiller_cata} placeholder="Servicio Sumiller Cata" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_pastelero_clase" value={formData.tipo_servicio_pastelero_clase} placeholder="Servicio Pastelero Clase" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_pastelero_desayuno" value={formData.tipo_servicio_pastelero_desayuno} placeholder="Servicio Pastelero Desayuno" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_pastelero_merienda" value={formData.tipo_servicio_pastelero_merienda} placeholder="Servicio Pastelero Merienda" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_barman_barra" value={formData.tipo_servicio_barman_barra} placeholder="Servicio Barman Barra" onChange={handleChange} />
                        <input type="text" name="tipo_servicio_barman_clase" value={formData.tipo_servicio_barman_clase} placeholder="Servicio Barman Clase" onChange={handleChange} />
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

export default EditarProfesional;
