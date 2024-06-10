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
            Servicio: tipoProfesional,
            Evento: "",
            Cocina: "",
            Localizacion: localizacion
        }));
    };

    const manejarTipoEvento = (tipoEvento) => {
        setTipoDeEvento(tipoEvento);
        setFicha(prevFicha => ({
            ...prevFicha,
            Evento: tipoEvento,
            Localizacion: localizacion
        }));
    };

    const manejarTipoCocina = (tipoCocina) => {
        setTipoDeCocina(tipoCocina);
        setFicha(prevFicha => ({
            ...prevFicha,
            Cocina: tipoCocina,
            Localizacion: localizacion
        }));
    };

    const manejarLocalizacion = (localizacion) => {
        setLocalizacion(localizacion);
        setFicha(prevFicha => ({
            ...prevFicha,
            Localizacion: localizacion
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
        Pax: "",
        Evento: "",
        Hora: "",
        Servicio: "",
        Direccion: "",
        IncluidoEnServicio: "",      
        Observaciones: "",
        Cocina: "",
        Localizacion: "",
        CostoDeServicio: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha({ ...ficha, [name]: value });
    };

    const addFicha = () => {
        if (ficha.Evento.trim() !== "") {
            console.log(ficha);
            setFicha({
                Pax: "",
                Evento: "",
                Hora: "",
                Servicio: "",
                Direccion: "",
                IncluidoEnServicio: "",             
                Observaciones: "",
                Cocina: "",
                Localizacion: "",
                CostoDeServicio: "",
                Fecha:""
            });
        }
    };

    const handleguardarservicio = (ficha) => {
        actions.crearServicioContratado(ficha);
        // navigate('/'); 
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
                                    Tipo de evento  Sumiller
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Cata de vinos')}>Cata de vinos</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Maridaje')}>Maridaje</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'pastelero' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento Pasteler@
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de pastelería')}>Clase de pastelería</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de desayuno')}>Servicio de desayuno</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de merienda')}>Servicio de merienda</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'cortador de jamon' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento Cortador de Jamon
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Corte de jamon')}>Corte de jamon</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de corte de jamon')}>Clase de corte de jamon</a></li>
                                </ul>
                            </div>
                        )}
                        {profesionalSeleccionado === 'barman' && (
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo de evento Barman/Barwomen
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Clase de cocktelería')}>Clase de cocktelería</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => manejarTipoEvento('Servicio de barra de cocktelería')}>Servicio de barra de cocktelería</a></li>
                                </ul>
                            </div>
                        )}
                        <div className="dropdown" style={{ marginRight: '10px' }}>
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Localidad
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => manejarLocalizacion('madrid')}>Madrid</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarLocalizacion('barcelona')}>Barcelona</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => manejarLocalizacion('valencia')}>Valencia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row inputFormulario">
                        <input
                            className="evento"
                            type="text"
                            name="Evento"
                            placeholder="Nombre del evento"
                            value={ficha.Evento}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="pax m-1"
                            type="text"
                            name="Pax"
                            placeholder="Pax"
                            value={ficha.Pax}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="hora m-1"
                            type="time"
                            name="Hora"
                            placeholder="Hora"
                            value={ficha.Hora}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="fecha m-1"
                            type="date"
                            name="Fecha"
                            value={ficha.Fecha}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="m-1"
                            type="text"
                            name="Direccion"
                            value={ficha.Direccion}
                            onChange={handleInputChange}
                            placeholder="Direccion del evento"
                            required
                        />
                        <input
                            className="m-1"
                            type="text"
                            name="IncluidoEnServicio"
                            value={ficha.IncluidoEnServicio}
                            onChange={handleInputChange}
                            placeholder="Que incluye tu servicio?"
                            required
                        />      
                         <input
                            className="m-1"
                            type="text"
                            name="CostoDeServicio"
                            value={ficha.CostoDeServicio}
                            onChange={handleInputChange}
                            placeholder="Coste de tu servicio"
                            required
                        />             
                        <input
                            className="m-1"
                            type="text"
                            name="Observaciones"
                            value={ficha.Observaciones}
                            onChange={handleInputChange}
                            placeholder="Alergias, peticiones especiales..."
                            required
                        />
                    </div>
                </div>
                <button className="boton" onClick={addFicha}>
                    {/* Aquí puedes agregar el texto o el ícono para el botón */}
                    Añadir Ficha
                </button>
            </div>
            <div className="resumenOrden">
                <h6>Resumen orden</h6>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><strong>Nombre del evento:</strong></td>
                            <td>{ficha.Evento}</td>
                        </tr>
                        <tr>
                            <td><strong>Fecha:</strong></td>
                            <td>{ficha.Fecha}</td>
                        </tr>
                        <tr>
                            <td><strong>Numero de personas:</strong></td>
                            <td>{ficha.Pax}</td>
                        </tr>
                        <tr>
                            <td><strong>Hora:</strong></td>
                            <td>{ficha.Hora}</td>
                        </tr>
                        <tr>
                            <td><strong>Servicio profesional:</strong></td>
                            <td>{ficha.Servicio}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo de evento:</strong></td>
                            <td>{ficha.Evento}</td>
                        </tr>
                        <tr>
                            <td><strong>Localización:</strong></td>
                            <td>{ficha.Localizacion}</td>
                        </tr>
                        <tr>
                            <td><strong>Dirección:</strong></td>
                            <td>{ficha.Direccion}</td>
                        </tr>
                        <tr>
                            <td><strong>El servicio incluye:</strong></td>
                            <td>{ficha.IncluidoEnServicio}</td>
                        </tr>
                        <tr>
                            <td><strong>Coste de servicio:</strong></td>
                            <td>{ficha.CostoDeServicio}</td>
                        </tr>
                        <tr>
                            <td><strong>Observaciones:</strong></td>
                            <td>{ficha.Observaciones}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn eliminar-profesional"  onClick={handleguardarservicio(ficha)}>
                    GUARDAR Y ENVIAR ORDEN
                </button>
            </div>
        </div>
    );
};

export default OrdenDeServicio;
