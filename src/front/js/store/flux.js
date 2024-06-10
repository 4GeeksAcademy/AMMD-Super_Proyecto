require('dotenv').config();
const BASE_URL = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            usuarios: [

            ],
            profesionales: [
                
            ],
            usuarioSeleccionado: [],
            profesionalSeleccionado: [],
            token: null,
            tipoServicioSeleccionado: null,
            tipoEventoSeleccionado: null,
            tipoComidaSeleccionada: null,
            localidadSeleccionada: null,
            serviciosContratados: []
        },
        actions: {
            // Use getActions to call a function within a function
            cargarUsuarios: () => {
                fetch(BASE_URL + "/api/usuarios")
                    .then(res => res.json())
                    .then(data => setStore({ usuarios: data.results }))
                    .catch(err => console.error("Error al cargar usuarios:", err));
            },
            cargarProfesionales: () => {
                fetch(BASE_URL + "/api/profesionales")
                    .then(res => res.json())
                    .then(data => setStore({ profesionales: data.results }))
                    .catch(err => console.error("Error al cargar profesionales:", err));
            },
            cargarUsuario: (id) => {
                fetch(BASE_URL + "/api/usuario/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ usuarioSeleccionado: data.results }))
                    .catch(err => console.error("Error al cargar usuario:", err));
            },
            cargarProfesional: (id) => {
                fetch(BASE_URL + "/api/profesional/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ profesionalSeleccionado: data.results }))
                    .catch(err => console.error("Error al cargar profesional:", err));
            },
            crearUsuario: (email, password) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password }),
                    redirect: "follow"
                };
                fetch(BASE_URL + "/api/crearusuario", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);

                    })
                    .catch((error) => console.error("Error al crear usuario:", error));
            },
            crearProfesional: (email, password) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password }),
                    redirect: "follow"
                };
                fetch(BASE_URL + "/api/crearprofesional", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);

                    })
                    .catch((error) => console.error("Error al crear profesional:", error));
            },
            iniciarSesionUsuario: (email, password) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password }),
                    redirect: "follow"
                };
                return fetch(BASE_URL + "/api/iniciarsesionusuario", requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ token: data.token, usuarios: data.user });
                        const store = getStore();
                        console.log(store.usuarios);
                        return true;  // Retorna true en caso de éxito
                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
                        return false;  // Retorna false en caso de error
                    });
            },
            iniciarSesionProfesional: (email, password) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password }),
                    redirect: "follow"
                };
                return fetch(BASE_URL + "/api/iniciarsesionprofesional", requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ token: data.token });
                        localStorage.setItem("token",data.token)                       
                        return true;  // Retorna true en caso de éxito
                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
                        return false;  // Retorna false en caso de error
                    });
            },
            editarUsuario: (userData) => {
                const store = getStore();
                const token = store.token;

                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(userData)
                };
                return fetch(BASE_URL + "/api/editarusuario", requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error en la solicitud");
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Usuario editado exitosamente", data);
                        // Puedes actualizar el estado o realizar otras acciones aquí
                        return data;
                    })
                    .catch(error => {
                        console.error("Error al editar el usuario", error);
                    });
            },
            cerrarSesionUsuario: () => {
                const store = getStore();
                const token = store.token;

                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    redirect: "follow"
                };

                fetch(`${BASE_URL}/api/cerrarsesionusuario`, requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ token: null, usuarioSeleccionado: [] });

                        // Redireccionar a la vista principal
                        window.location.href = '/';

                        // Mostrar una alerta
                        alert("Has cerrado sesión exitosamente");
                    })
                    .catch((error) => {
                        console.error("Error al cerrar sesión:", error);
                    });
            },
            eliminarUsuario: () => {
                const store = getStore();
                const token = store.token;

                const requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    redirect: "follow"
                };

                return fetch(`${BASE_URL}/api/eliminarusuario`, requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // Aquí puedes realizar acciones adicionales después de eliminar el usuario, si es necesario
                        console.log("Usuario eliminado exitosamente", data);

                        // Mostrar una alerta
                        alert("Usuario eliminado exitosamente");


                        return data;
                    })
                    .catch((error) => {
                        console.error("Error al eliminar usuario:", error);
                    });
            },
            editarProfesional: (profesionalData) => {
                const store = getStore();
                const token = store.token;

                console.log(profesionalData)

                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(profesionalData)
                };
                return fetch(`${BASE_URL}/api/editarprofesional`, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error en la solicitud");
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Profesional editado exitosamente", data);
                        // Puedes actualizar el estado o realizar otras acciones aquí
                        return data;
                    })
                    .catch(error => {
                        console.error("Error al editar el profesional", error);
                    });
            },
            cerrarSesionProfesional: () => {
                const store = getStore();
                const token = store.token;

                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    redirect: "follow"
                };

                fetch(`${BASE_URL}/api/cerrarsesionprofesional`, requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ token: null, usuarioSeleccionado: [] });

                        // Redireccionar a la vista principal
                        window.location.href = '/';

                        // Mostrar una alerta
                        alert("Has cerrado sesión exitosamente");
                    })
                    .catch((error) => {
                        console.error("Error al cerrar sesión:", error);
                    });
            },
            eliminarProfesional: () => {
                const store = getStore();
                const token = store.token;

                const requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    redirect: "follow"
                };

                return fetch(`${BASE_URL}/api/eliminarprofesional`, requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // Aquí puedes realizar acciones adicionales después de eliminar el usuario, si es necesario
                        console.log("Usuario eliminado exitosamente", data);

                        // Mostrar una alerta
                        alert("Usuario eliminado exitosamente");


                        return data;
                    })
                    .catch((error) => {
                        console.error("Error al eliminar usuario:", error);
                    });
            },

            filtrarTipoServicio: (servicio) => {
                setStore({ tipoServicioSeleccionado: servicio });
            },
            filtrarTipoEvento: (evento) => {
                setStore({ tipoEventoSeleccionado: evento })
            },
            filtrarTipoCocina: (cocina) => {
                setStore({ tipoCocinaSeleccionada: cocina })
            },
            filtrarLocalizacion: (localizacion) => {
                setStore({ localidadSeleccionada: localizacion });
            },
            crearServicioContratado: (data) => {

                const token = localStorage.getItem('token');

                console.log(token)
                if (!token) {
                    console.error('Token no encontrado');
                    return;
                }
            
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Agregar el token de acceso en el encabezado de autorización
                    },
                    body: JSON.stringify(data)
                };
            
                fetch(`${BASE_URL}/api/crearserviciocontratado`, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Servicio contratado guardado correctamente:', data);
                        // Puedes realizar otras acciones aquí si es necesario
                    })
                    .catch(error => {
                        console.error('Error al guardar servicio contratado:', error);
                    });
            },
            
            obtenerServiciosContratadosProfesional: () => {
                // Obtener el token de acceso del almacenamiento local
                const token = localStorage.getItem('token');

                // Verificar si el token está presente
                if (!token) {
                    console.error('Token de acceso no encontrado');
                    return;
                }

                // Configurar las opciones de la solicitud
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Agregar el token de acceso en el encabezado de autorización
                    }
                };

                // Realizar la solicitud a la ruta de servicios contratados del profesional
                fetch(`${BASE_URL}/api/servicioscontratadosprofesional`, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error de red! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Servicios contratados por el profesional:', data);
                        // Actualizar el estado global con los servicios contratados
                        setStore({ serviciosContratados: data.servicios_contratados });
                    })
                    .catch(error => {
                        console.error('Error al obtener servicios contratados:', error);
                    });
            },
            obtenerServiciosContratadosUsuario: () => {
                const token = localStorage.getItem('token');
            
                if (!token) {
                    console.error('Token de acceso no encontrado');
                    return;
                }
            
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                };
            
                fetch(`${BASE_URL}/api/servicioscontratadosusuario`, requestOptions)
                    
                    .then(response => {
                        console.log(response.status)
                        if (!response.ok) {
                            throw new Error(`Error de red! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
                        if (data.servicioscontratados) {
                            setStore({ serviciosContratados: data.serviciosContratados });
                        } else {
                            setStore({ serviciosContratados: [] });
                        }
                    })
                    .catch(error => {
                        console.error('Error al obtener servicios contratados:', error);
                    });
            },
            
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            changeColor: (index, color) => {
                // get the store
                const store = getStore();
                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                // reset the global store
                setStore({ demo: demo });
            }
        }
    };
};
export default getState;