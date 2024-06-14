import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useLocation, useNavigate } from "react-router-dom";

const EditarProfesional = () => {
    const { actions } = useContext(Context);
    const location = useLocation();
    const profesional = location.state?.profesional;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        telefono: "",
        localizacion: "",
        direccion: "",
        foto_de_perfil: "",
        email :"",
        descripcion: "",
        info_adicional: "",
        tipo_de_profesional: "",
        tipo_de_cocina_especialidad: {
            cocina_española: false,
            cocina_peruana: false,
            cocina_griega: false,
            cocina_americana: false,
            cocina_italiana: false,
            cocina_argentina: false,
            cocina_tailandesa: false,
            cocina_mexicana: false,
            cocina_creativa: false,
            cocina_japonesa: false,
            cocina_vegana: false
        },
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
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        if (profesional) {
            setFormData({
                nombre: profesional.nombre || "",
                email: profesional.email || "",
                apellidos: profesional.apellidos || "",
                telefono: profesional.telefono || "",
                localizacion: profesional.localizacion || "",
                direccion: profesional.direccion || "",
                foto_de_perfil: profesional.foto_de_perfil || "",
                descripcion: profesional.descripcion || "",
                info_adicional: profesional.info_adicional || "",
                tipo_de_profesional: profesional.tipo_de_profesional || "",
                tipo_de_cocina_especialidad: profesional.tipo_de_cocina_especialidad || {
                    cocina_española: false,
                    cocina_peruana: false,
                    cocina_griega: false,
                    cocina_americana: false,
                    cocina_italiana: false,
                    cocina_argentina: false,
                    cocina_tailandesa: false,
                    cocina_mexicana: false,
                    cocina_creativa: false,
                    cocina_japonesa: false,
                    cocina_vegana: false
                },
                tipo_servicio_chef_pica_pica: profesional.tipo_servicio_chef_pica_pica || "",
                tipo_servicio_chef_taller_de_cocina: profesional.tipo_servicio_chef_taller_de_cocina || "",
                tipo_servicio_chef_comida_de_trabajo: profesional.tipo_servicio_chef_comida_de_trabajo || "",
                tipo_servicio_chef_servicio_degustacion: profesional.tipo_servicio_chef_servicio_degustacion || "",
                tipo_servicio_chef_comida_informal: profesional.tipo_servicio_chef_comida_informal || "",
                tipo_servicio_chef_batchcooking: profesional.tipo_servicio_chef_batchcooking || "",
                tipo_servicio_jamonero_corte: profesional.tipo_servicio_jamonero_corte || "",
                tipo_servicio_jamonero_clase_corte: profesional.tipo_servicio_jamonero_clase_corte || "",
                tipo_servicio_sumiller_maridaje: profesional.tipo_servicio_sumiller_maridaje || "",
                tipo_servicio_sumiller_cata: profesional.tipo_servicio_sumiller_cata || "",
                tipo_servicio_pastelero_clase: profesional.tipo_servicio_pastelero_clase || "",
                tipo_servicio_pastelero_desayuno: profesional.tipo_servicio_pastelero_desayuno || "",
                tipo_servicio_pastelero_merienda: profesional.tipo_servicio_pastelero_merienda || "",
                tipo_servicio_barman_barra: profesional.tipo_servicio_barman_barra || "",
                tipo_servicio_barman_clase: profesional.tipo_servicio_barman_clase || "",
                is_active: profesional.is_active || true
            });
        }
    }, [profesional]);

    const handleChangeCheck = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                tipo_de_cocina_especialidad: {
                    ...formData.tipo_de_cocina_especialidad,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

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
        console.log(dataToSend)
        actions.editarProfesional(dataToSend)
            .then(result => {
                if (result) {
                    window.alert("Profesional editado con éxito");
                    navigate("/privadaprofesional"); 
                }
            })
            .catch(error => {
                console.error("Error al editar el profesional", error);
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
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="nombre" value={formData.nombre} placeholder="Nombre" onChange={handleChangeCheck} />
                            {console.log(formData)}
                            <input type="text" name="email" value={formData.email} placeholder="email" onChange={handleChangeCheck} />
                            {console.log(formData)}
                            <input type="text" name="apellidos" value={formData.apellidos} placeholder="Apellidos" onChange={handleChangeCheck} />
                            <input type="text" name="telefono" value={formData.telefono} placeholder="Teléfono" onChange={handleChangeCheck} />
                            <select name="localizacion" value={formData.localizacion} onChange={handleChangeCheck}>
                                <option value="">Selecciona una localización</option>
                                <option value="madrid">Madrid</option>
                                <option value="barcelona">Barcelona</option>
                                <option value="valencia">Valencia</option>
                            </select>
                            <input type="text" name="direccion" value={formData.direccion} placeholder="Dirección" onChange={handleChangeCheck} />
                            <input type="text" name="foto_de_perfil" value={formData.foto_de_perfil} placeholder="Foto de Perfil" onChange={handleChangeCheck} />
                            <input type="text" name="descripcion" value={formData.descripcion} placeholder="Descripción" onChange={handleChangeCheck} />
                            <input type="text" name="info_adicional" value={formData.info_adicional} placeholder="Información adicional" onChange={handleChangeCheck} />
                            <select name="tipo_de_profesional" value={formData.tipo_de_profesional} onChange={handleChangeCheck}>
                                <option value="">Selecciona el tipo de profesional</option>
                                <option value="chef">Chef</option>
                                <option value="barman">Barman</option>
                                <option value="cortador de jamon">Cortador de Jamón</option>
                                <option value="sumiller">Sumiller</option>
                                <option value="pastelero">Pastelero</option>
                            </select>
                            {formData.tipo_de_profesional === "chef" && (
                                <>
                                    <input type="text" name="tipo_servicio_chef_pica_pica" value={formData.tipo_servicio_chef_pica_pica} placeholder="Servicio Chef Pica Pica" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_chef_taller_de_cocina" value={formData.tipo_servicio_chef_taller_de_cocina} placeholder="Servicio Chef Taller de Cocina" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_chef_comida_de_trabajo" value={formData.tipo_servicio_chef_comida_de_trabajo} placeholder="Servicio Chef Comida de Trabajo" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_chef_servicio_degustacion" value={formData.tipo_servicio_chef_servicio_degustacion} placeholder="Menú degustación" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_chef_comida_informal" value={formData.tipo_servicio_chef_comida_informal} placeholder="Servicio Chef Comida Informal" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_chef_batchcooking" value={formData.tipo_servicio_chef_batchcooking} placeholder="Servicio Chef Batchcooking" onChange={handleChangeCheck} />
                                </>
                            )}
                            {formData.tipo_de_profesional === "chef" && (
                                <>
                                    <h6>Seleccione su especialidad de cocina:</h6>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina española"
                                            value={formData.tipo_de_cocina_especialidad === "cocina española"}
                                            onChange={handleChangeCheck}                                            
                                        />
                                        Cocina española
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina peruana"
                                            value={formData.tipo_de_cocina_especialidad === "cocina peruana"}
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina peruana
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina griega"
                                            value={formData.tipo_de_cocina_especialidad === "cocina griega"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina griega
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina americana"
                                            value={formData.tipo_de_cocina_especialidad === "cocina americana"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina americana
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina italiana"
                                            value={formData.tipo_de_cocina_especialidad === "cocina italiana"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina italiana
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina argentina"
                                            value={formData.tipo_de_cocina_especialidad === "cocina argentina"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina argentina
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina tailandesa"
                                            value={formData.tipo_de_cocina_especialidad === "cocina tailandesa"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina tailandesa
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina mexicana"
                                            value={formData.tipo_de_cocina_especialidad === "cocina mexicana"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina mexicana
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina creativa"
                                            value={formData.tipo_de_cocina_especialidad === "cocina creativa"}                                            
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina creativa
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina japonesa"
                                            value={formData.tipo_de_cocina_especialidad === "cocina japonesa"}                                         
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina japonesa
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="cocina vegana"
                                            value={formData.tipo_de_cocina_especialidad === "cocina vegana"}
                                            onChange={handleChangeCheck}
                                        />
                                        Cocina vegana
                                    </label>                                 
                                </>
                            )}
                            {formData.tipo_de_profesional === "sumiller" && (
                                <>
                                    <input type="text" name="tipo_servicio_sumiller_maridaje" value={formData.tipo_servicio_sumiller_maridaje} placeholder="Servicio Sumiller Maridaje" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_sumiller_cata" value={formData.tipo_servicio_sumiller_cata} placeholder="Servicio Sumiller Cata" onChange={handleChangeCheck} />
                                </>
                            )}
                            {formData.tipo_de_profesional === "pastelero" && (
                                <>
                                    <input type="text" name="tipo_servicio_pastelero_clase" value={formData.tipo_servicio_pastelero_clase} placeholder="Servicio Pastelero Clase" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_pastelero_desayuno" value={formData.tipo_servicio_pastelero_desayuno} placeholder="Servicio Pastelero Desayuno" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_pastelero_merienda" value={formData.tipo_servicio_pastelero_merienda} placeholder="Servicio Pastelero Merienda" onChange={handleChangeCheck} />
                                </>
                            )}
                            {formData.tipo_de_profesional === "barman" && (
                                <>
                                    <input type="text" name="tipo_servicio_barman_barra" value={formData.tipo_servicio_barman_barra} placeholder="Servicio Barman Barra" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_barman_clase" value={formData.tipo_servicio_barman_clase} placeholder="Servicio Barman Clase" onChange={handleChangeCheck} />
                                </>
                            )}
                            {formData.tipo_de_profesional === "cortador de jamon" && (
                                <>
                                    <input type="text" name="tipo_servicio_jamonero_corte" value={formData.tipo_servicio_jamonero_corte} placeholder="Servicio Corte de Jamón" onChange={handleChangeCheck} />
                                    <input type="text" name="tipo_servicio_jamonero_clase_corte" value={formData.tipo_servicio_jamonero_clase_corte} placeholder="Servicio Clase de Corte" onChange={handleChangeCheck} />
                                </>
                            )}
                            <button type="submit">Guardar</button>
                        </form>
                        {error && <div className="error">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProfesional;