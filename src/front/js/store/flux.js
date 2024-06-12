require('dotenv').config();
const BASE_URL = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            usuarios: [],
            profesionales: [],
            usuarioSeleccionado: [],
            profesionalSeleccionado: [],
            token: null,
            tipoServicioSeleccionado: null,
            tipoEventoSeleccionado: null,
            tipoComidaSeleccionada: null,
            localidadSeleccionada: null,

            serviciosContratados: [],
            ipInfo: null,

            conversaciones: [],

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
            cargarUsuario : (id) => (dispatch, getStore) => {
                const store = getStore();
                const token = store.token;
              
                fetch(`${BASE_URL}/api/usuario/${id}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(res => {
                    if (!res.ok) {
                      throw new Error('Error al cargar usuario');
                    }
                    return res.json();
                  })
                  .then(data => {
                    dispatch({
                      type: 'CARGAR_USUARIO',
                      payload: data.results
                    });
                  })
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
                        console.log(data)
                        localStorage.setItem("id", data.user.id)
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
                        setStore({ token: data.token, profesionales: data.profesional });
                        console.log(data)
                        localStorage.setItem("id",data.profesional.id)                      
                        const store = getStore();
                        console.log(store.profesionales);
                        return true;
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
                    if (response.ok) {
                        return response.json(); // Devuelve los datos si la respuesta es exitosa
                    } else if (response.status === 404) {
                        throw new Error("Recurso no encontrado"); // Maneja específicamente el error 404
                    } else {
                        throw new Error("Error en la solicitud"); // Maneja otros errores de manera genérica
                    }
                })
                .then(data => {
                    console.log("Usuario editado exitosamente", data);
                    console.log(data.usuario)
                    setStore({ usuarios: data.usuario });
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
                return fetch(BASE_URL + "/api/editarprofesional", requestOptions)
                    .then(response => {
                        if (response.ok) {
                            return response.json(); // Devuelve los datos si la respuesta es exitosa
                        } else if (response.status === 404) {
                            throw new Error("Recurso no encontrado"); // Maneja específicamente el error 404
                        } else {
                            throw new Error("Error en la solicitud"); // Maneja otros errores de manera genérica
                        }
                    })
                    .then(data => {
                        console.log("Profesional editado exitosamente", data);
                        console.log(data.profesional)
                        setStore({ profesionales: data.profesional });
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
                const store = getStore();
                const token = store.token;  
            
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
                      
                        if (!response.ok) {
                            throw new Error(`Error de red! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
                       
                            setStore({ serviciosContratados: data.servicios_contratados });
                      
                        
                    })
                    .catch(error => {
                        console.error('Error al obtener servicios contratados:', error);
                    });
            },
            responderServicio: async (id,estado_servicio)=>{

                try {
                    const store = getStore();
                    const token = store.token;  
            
                    if (!token) {
                        console.error('Token de acceso no encontrado');
                        return;
                    }
                
                    const requestOptions = {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                             'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ estado_servicio: estado_servicio })
                    };
                    const resp= await fetch(`${BASE_URL}/api/respuestaservicio/${id}`, requestOptions)
                    const data= await resp.json()
                    console.log(data)
                    
                } catch (error) {
                    console.log("error respondiendo al servicio ", error)
                }
            },
            

            crearConversacion: (profesional_id, usuario_id, coment_text) => {
                
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ profesional_id, coment_text, usuario_id })
                };

                return fetch(`${BASE_URL}/api/crearconversacion`, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Conversación creada exitosamente", data);
                    // Puedes actualizar el estado o realizar otras acciones aquí
                    // Por ejemplo, podrías añadir la nueva conversación a una lista en el store
                })
                .catch(error => {
                    console.error("Error al crear la conversación:", error);
                });
            },
            obtenerID: async () => {
                try {
                    const response = await fetch("https://ipapi.co/json/");
                    const result = await response.json();
                    setStore({ ipInfo: result });
                } catch (error) {
                    console.error("Error fetching IP info:", error);
                }
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