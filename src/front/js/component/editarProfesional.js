import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useLocation ,useNavigate} from "react-router-dom";

const EditarProfesional = () => {
    const { actions } = useContext(Context);
    const location = useLocation();
    const usuario = location.state?.usuario;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
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
        tipo_servicio_chef_batchcooking: "",
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
                tipo_servicio_chef_batchcooking: usuario.tipo_servicio_chef_batchcooking || "",
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

        console.log(formData)
        
        const dataToSend = {};
        for (let key in formData) {
            if (formData[key] !== "" && formData[key] !== null) {
                dataToSend[key] = formData[key];
            }
        }
        actions.editarProfesional(dataToSend)
            .then(result => {
                if (result) {
                    window.alert("Profesional editado con éxito");
                    navigate("/privadaprofesional");
                }
            })
            .catch(error => {
                console.error("Error al editar el usuario", error);
            });
    };

    const renderChefFields = () => (
        <>
            <input type="text" name="tipo_servicio_chef_pica_pica" value={formData.tipo_servicio_chef_pica_pica} placeholder="Servicio Chef Pica Pica" onChange={handleChange} />
            <input type="text" name="tipo_servicio_chef_taller_de_cocina" value={formData.tipo_servicio_chef_taller_de_cocina} placeholder="Servicio Chef Taller de Cocina" onChange={handleChange} />
            <input type="text" name="tipo_servicio_chef_comida_de_trabajo" value={formData.tipo_servicio_chef_comida_de_trabajo} placeholder="Servicio Chef Comida de Trabajo" onChange={handleChange} />
            <input type="text" name="tipo_servicio_chef_servicio_degustacion" value={formData.tipo_servicio_chef_servicio_degustacion} placeholder="Servicio Chef Servicio Degustación" onChange={handleChange} />
            <input type="text" name="tipo_servicio_chef_comida_informal" value={formData.tipo_servicio_chef_comida_informal} placeholder="Servicio Chef Comida Informal" onChange={handleChange} />
            <input type="text" name="tipo_servicio_chef_batchcooking" value={formData.tipo_servicio_chef_batchcooking} placeholder="Servicio Chef Batchcooking" onChange={handleChange} />
        </>
    );

    const renderSumillerFields = () => (
        <>
            <input type="text" name="tipo_servicio_sumiller_maridaje" value={formData.tipo_servicio_sumiller_maridaje} placeholder="Servicio Sumiller Maridaje" onChange={handleChange} />
            <input type="text" name="tipo_servicio_sumiller_cata" value={formData.tipo_servicio_sumiller_cata} placeholder="Servicio Sumiller Cata" onChange={handleChange} />
        </>
    );

    const renderPasteleroFields = () => (
        <>
            <input type="text" name="tipo_servicio_pastelero_clase" value={formData.tipo_servicio_pastelero_clase} placeholder="Servicio Pastelero Clase" onChange={handleChange} />
            <input type="text" name="tipo_servicio_pastelero_desayuno" value={formData.tipo_servicio_pastelero_desayuno} placeholder="Servicio Pastelero Desayuno" onChange={handleChange} />
            <input type="text" name="tipo_servicio_pastelero_merienda" value={formData.tipo_servicio_pastelero_merienda} placeholder="Servicio Pastelero Merienda" onChange={handleChange} />
        </>
    );

    const renderJamoneroFields = () => (
        <>
            <input type="text" name="tipo_servicio_jamonero_corte" value={formData.tipo_servicio_jamonero_corte} placeholder="Servicio Jamonero Corte" onChange={handleChange} />
            <input type="text" name="tipo_servicio_jamonero_clase_corte" value={formData.tipo_servicio_jamonero_clase_corte} placeholder="Servicio Jamonero Clase de Corte" onChange={handleChange} />
        </>
    );

    const renderBarmanFields = () => (
        <>
            <input type="text" name="tipo_servicio_barman_barra" value={formData.tipo_servicio_barman_barra} placeholder="Servicio Barman Barra" onChange={handleChange} />
            <input type="text" name="tipo_servicio_barman_clase" value={formData.tipo_servicio_barman_clase} placeholder="Servicio Barman Clase" onChange={handleChange} />
        </>
    );

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
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                            <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
                            <input type="text" name="nombre" value={formData.nombre} placeholder="Nombre" onChange={handleChange} />
                            <input type="text" name="apellidos" value={formData.apellidos} placeholder="Apellidos" onChange={handleChange} />
                            <input type="text" name="telefono" value={formData.telefono} placeholder="Telefono" onChange={handleChange} />
                            <input type="text" name="localizacion" value={formData.localizacion} placeholder="Localizacion" onChange={handleChange} />
                            <input type="text" name="direccion" value={formData.direccion} placeholder="Direccion" onChange={handleChange} />
                            <input type="text" name="foto_de_perfil" value={formData.foto_de_perfil} placeholder="Foto de Perfil" onChange={handleChange} />
                            <input type="text" name="descripcion" value={formData.descripcion} placeholder="Descripción" onChange={handleChange} />
                            <input type="text" name="info_adicional" value={formData.info_adicional} placeholder="Información adicional" onChange={handleChange} />
                            <select name="tipo_de_profesional" value={formData.tipo_de_profesional} onChange={handleChange}>
                                <option value="">Selecciona el tipo de profesional</option>
                                <option value="Chef">Chef</option>
                                <option value="Sumiller">Sumiller</option>
                                <option value="Pastelero">Pastelero</option>
                                <option value="Jamonero">Jamonero</option>
                                <option value="Barman">Barman</option>
                            </select>
                            {formData.tipo_de_profesional === "Chef" && renderChefFields()}
                            {formData.tipo_de_profesional === "Sumiller" && renderSumillerFields()}
                            {formData.tipo_de_profesional === "Pastelero" && renderPasteleroFields()}
                            {formData.tipo_de_profesional === "Jamonero" && renderJamoneroFields()}
                            {formData.tipo_de_profesional === "Barman" && renderBarmanFields()}
                            <button type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProfesional;