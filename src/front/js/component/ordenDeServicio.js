import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const OrdenDeServicio = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [profesionalSeleccionado, setProfesionalSeleccionado] = useState("");
    const [tipoDeEvento, setTipoDeEvento] = useState("");
    const [tipoDeCocina, setTipoDeCocina] = useState("");
    const [localizacion, setLocalizacion] = useState("");

    const manejarTipoProfesional = (tipoProfesional) => {
        setProfesionalSeleccionado(tipoProfesional);
        setFicha(prevFicha => ({
            ...prevFicha,
            servicio_profesional: tipoProfesional,
            tipo_evento: "",
            cocina: "",
            localizacion: localizacion
        }));
    };

    const manejarTipoEvento = (tipoEvento) => {
        setTipoDeEvento(tipoEvento);
        setFicha(prevFicha => ({
            ...prevFicha,
            tipo_evento: tipoEvento,
            localizacion: localizacion
        }));
    };

    const manejarTipoCocina = (tipoCocina) => {
        setTipoDeCocina(tipoCocina);
        setFicha(prevFicha => ({
            ...prevFicha,
            cocina: tipoCocina,
            localizacion: localizacion
        }));
    };

    const manejarLocalizacion = (localizacion) => {
        setLocalizacion(localizacion);
        setFicha(prevFicha => ({
            ...prevFicha,
            localizacion: localizacion
        }));
    };

    const manejarBuscar = (servicio, evento, cocina, localizacion) => {
        actions.filtrarTipoServicio(servicio);
        actions.filtrarTipoEvento(evento);
        actions.filtrarTipoCocina(cocina);
        actions.filtrarLocalizacion(localizacion);
        navigate(`/busquedaprofesionales`);
    };

    const [ficha, setFicha] = useState({
        nombre_evento: "",
        fecha: "",
        numero_personas: "",
        hora: "",
        servicio_profesional: "",
        tipo_evento: "",
        localizacion: "",
        direccion: "",
        servicio_incluye: "",
        costo_servicio: "",
        observaciones: "",
        cliente_id: store.cliente_id || 1, // Assuming cliente_id is obtained from the store or a default value
        profesional_id: store.profesional_id || 1, // Assuming profesional_id is obtained from the store or a default value
        fecha_contratacion: new Date().toISOString()
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha({ ...ficha, [name]: value });
    };

    const addFicha = () => {
        if (ficha.tipo_evento.trim() !== "") {
            console.log(ficha);
            setFicha({
                nombre_evento: "",
                fecha: "",
                numero_personas: "",
                hora: "",
                servicio_profesional: "",
                tipo_evento: "",
                localizacion: "",
                direccion: "",
                servicio_incluye: "",
                costo_servicio: "",
                observaciones: "",
                cliente_id: store.cliente_id || 1,
                profesional_id: store.profesional_id || 1,
                fecha_contratacion: new Date().toISOString()
            });
        }
    };

    const handleguardarservicio = (ficha) => {
        actions.crearServicioContratado(ficha);
        navigate('/'); 
    };
    console.log(ficha)

    return (
        <div>
            <div className="fichaTecnica">
                <h3>Rellena la orden de servicio</h3>
                <div className="row container">                   
                    <div className="m-3">
                        <div className="dropdown" style={{ marginRight: '10px' }}>
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tipo de servicio
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('chef')}>Chef</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('sumiller')}>Sumiller</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('pastelero')}>Pasteler@</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('cortador de jamon')}>Cortador/a de jamón</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarTipoProfesional('barman')}>Barman/Barwomen</a></li>
                            </ul>
                        </div>
                        {profesionalSeleccionado === 'chef' && (
                            <>
                                <div className="dropdown" style={{ marginRight: '10px' }}>
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tipo de evento chef
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('pica-pica')}>Pica-pica</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('taller de cocina')}>Taller de cocina</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida informal')}>Cocina informal</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida de empresa')}>Cocina de empresa</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('comida menu degustacion')}>Cocina menu degustacion</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('batchcooking')}>Batchcooking</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown" style={{ marginRight: '10px' }}>
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tipo de cocina
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina española')}>Cocina española</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina peruana')}>Cocina peruana</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina japonesa')}>Cocina japonesa</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina italiana')}>Cocina italiana</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina vegana')}>Cocina vegana</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina mexicana')}>Cocina mexicana</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina griega')}>Cocina griega</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina argentina')}>Cocina argentina</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina americana')}>Cocina americana</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina tailandesa')}>Cocina tailandesa</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => manejarTipoCocina('cocina creativa')}>Cocina creativa</a></li>
                                    </ul>
                                </div>
                            </>
                        )}
                        {profesionalSeleccionado === 'sumiller' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento sumiller
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('cata de vino')}>Cata de vino</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('cata de cava')}>Cata de cava</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('cata de gin-tonic')}>Cata de gin-tonic</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'pastelero' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento pastelero
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('cumpleaños')}>Cumpleaños</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('boda')}>Boda</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('aniversario')}>Aniversario</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('evento tematico')}>Evento temático</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('taller de pasteleria')}>Taller de pastelería</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'cortador de jamon' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento cortador de jamón
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('evento social')}>Evento social</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('evento corporativo')}>Evento corporativo</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('celebracion')}>Celebración</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'barman' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento barman
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('evento social')}>Evento social</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('evento corporativo')}>Evento corporativo</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('celebracion')}>Celebración</a></li>
                                </ul>
                            </div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="localizacion" className="form-label">Localización:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="localizacion" 
                                value={localizacion} 
                                onChange={(e) => manejarLocalizacion(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre_evento" className="form-label">Nombre del Evento</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre_evento"
                                name="nombre_evento"
                                value={ficha.nombre_evento}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha" className="form-label">Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha"
                                name="fecha"
                                value={ficha.fecha}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numero_personas" className="form-label">Número de Personas</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numero_personas"
                                name="numero_personas"
                                value={ficha.numero_personas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <input
                                type="time"
                                className="form-control"
                                id="hora"
                                name="hora"
                                value={ficha.hora}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                id="direccion"
                                name="direccion"
                                value={ficha.direccion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="servicio_incluye" className="form-label">Servicio Incluye</label>
                            <textarea
                                className="form-control"
                                id="servicio_incluye"
                                name="servicio_incluye"
                                rows="3"
                                value={ficha.servicio_incluye}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="costo_servicio" className="form-label">Costo del Servicio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="costo_servicio"
                                name="costo_servicio"
                                value={ficha.costo_servicio}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <textarea
                                className="form-control"
                                id="observaciones"
                                name="observaciones"
                                rows="3"
                                value={ficha.observaciones}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button onClick={addFicha} className="btn btn-primary">Guardar Borrador</button>
                        <button onClick={() => handleguardarservicio(ficha)} className="btn btn-primary">Guardar y Contratar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdenDeServicio;
