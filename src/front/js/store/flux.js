require('dotenv').config();
const BASE_URL = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            usuarios: [

            ],
            profesionales: [{
                "id": 1,
                "nombre": "Juan",
                "apellidos": "Martínez",
                "email": "juan@hotmail.com",
                "localizacion": "madrid",
                "foto_de_perfil": "foto2.jpg",
                "descripcion": "Especialista en alta cocina.",
                "direccion": "Avenida Siempre Viva 742",
                "telefono": "987654321",
                "info_adicional": "Experiencia internacional.",

                "tipo_de_profesional": 'chef',

                "tipo_servicio_chef_pica_pica": true,
                "tipo_servicio_chef_taller_de_cocina": true,
                "tipo_servicio_chef_comida_de_trabajo": false,
                "tipo_servicio_chef_servicio_degustacion": false,
                "tipo_servicio_chef_comida_informal": true,
                "tipo_servicio_chef_batchcooking": true,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": true,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,

                "tipo_de_cocina_especialidad": 'cocina española',

                "is_active": true
            },
            {
                "id": 2,
                "nombre": "David",
                "apellidos": "Martínez",
                "email": "chefdavid@hotmail.com",
                "localizacion": "barcelona",
                "foto_de_perfil": "foto2.jpg",
                "descripcion": "Especialista en alta cocina.",
                "direccion": "Avenida Siempre Viva 742",
                "telefono": "987654321",
                "info_adicional": "Experiencia internacional.",

                "tipo_de_profesional": 'chef',

                "tipo_servicio_chef_pica_pica": false,
                "tipo_servicio_chef_taller_de_cocina": false,
                "tipo_servicio_chef_comida_de_trabajo": true,
                "tipo_servicio_chef_servicio_degustacion": false,
                "tipo_servicio_chef_comida_informal": false,
                "tipo_servicio_chef_batchcooking": false,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": true,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,

                "tipo_de_cocina_especialidad": 'cocina peruana',

                "is_active": true
            },
            {
                "id": 3,
                "nombre": "Carlos",
                "apellidos": "López",
                "email": "carlos@hotmail.com",
                "localizacion": "barcelona",
                "foto_de_perfil": "foto3.jpg",
                "descripcion": "Chef pastelero con 10 años de experiencia.",
                "direccion": "Calle de la Paz 15",
                "telefono": "654321987",
                "info_adicional": "Especialidad en postres franceses.",

                "tipo_de_profesional": 'pastelero',

                "tipo_servicio_pastelero_clase": true,
                "tipo_servicio_pastelero_desayuno": true,
                "tipo_servicio_pastelero_merienda": false,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": true,
                "tipo_servicio_sumiller": false,

                "is_active": true
            },
            {
                "id": 6,
                "nombre": "Laura",
                "apellidos": "López",
                "email": "carlos@hotmail.com",
                "localizacion": "valencia",
                "foto_de_perfil": "foto3.jpg",
                "descripcion": "Chef pastelero con 10 años de experiencia.",
                "direccion": "Calle de la Paz 15",
                "telefono": "654321987",
                "info_adicional": "Especialidad en postres franceses.",

                "tipo_de_profesional": 'pastelero',

                "tipo_servicio_pastelero_clase": false,
                "tipo_servicio_pastelero_desayuno": true,
                "tipo_servicio_pastelero_merienda": false,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": true,
                "tipo_servicio_sumiller": false,

                "is_active": true
            },
            {
                "id": 4,
                "nombre": "Ainhoa",
                "apellidos": "Fernández",
                "email": "ainhoa@hotmail.com",
                "localizacion": "valencia",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'sumiller',

                "tipo_servicio_sumiller_maridaje": true,
                "tipo_servicio_sumiller_cata": false,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": true,


                "is_active": true
            },
            {
                "id": 5,
                "nombre": "Sara",
                "apellidos": "Fernández",
                "email": "sara@hotmail.com",
                "localizacion": "valencia",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'sumiller',

                "tipo_servicio_sumiller_maridaje": false,
                "tipo_servicio_sumiller_cata": true,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": true,


                "is_active": true
            },
            {
                "id": 7,
                "nombre": "Ramón",
                "apellidos": "Fernández",
                "email": "sara@hotmail.com",
                "localizacion": "barcelona",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'cortador de jamon',

                "tipo_servicio_jamonero_corte": true,
                "tipo_servicio_jamonero_clase_corte": false,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": true,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,


                "is_active": true
            },
            {
                "id": 8,
                "nombre": "María",
                "apellidos": "Fernández",
                "email": "sara@hotmail.com",
                "localizacion": "madrid",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'cortador de jamon',

                "tipo_servicio_jamonero_corte": false,
                "tipo_servicio_jamonero_clase_corte": true,

                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": true,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,


                "is_active": true
            },
            {
                "id": 9,
                "nombre": "Javier",
                "apellidos": "Fernández",
                "email": "sara@hotmail.com",
                "localizacion": "madrid",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'barman',

                "tipo_servicio_barman_barra": false,
                "tipo_servicio_barman_clase": true,

                "tipo_servicio_barman": true,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,


                "is_active": true
            },
            {
                "id": 10,
                "nombre": "Ana",
                "apellidos": "Fernández",
                "email": "sara@hotmail.com",
                "localizacion": "madrid",
                "foto_de_perfil": "foto4.jpg",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "telefono": "321654987",
                "info_adicional": "Trabaja en colaboración con bodegas locales.",

                "tipo_de_profesional": 'barman',

                "tipo_servicio_barman_barra": true,
                "tipo_servicio_barman_clase": false,

                "tipo_servicio_barman": true,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false,


                "is_active": true
            },

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
                        const store = getStore();
                        console.log(store.usuarios);
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
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
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
                        // Aquí puedes realizar acciones adicionales si es necesario
                    })
                    .catch(error => {
                        console.error('Error al guardar servicio contratado:', error);
                    });
            },
            // Función para obtener los servicios contratados del usuario
            obtenerServiciosContratadosUsuario: () => {
                // Obtener el token de acceso del almacenamiento local (asegúrate de tenerlo disponible)
                const token = localStorage.getItem('accessToken');

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

                // Realizar la solicitud a la ruta de servicios contratados del usuario
                fetch(`${BASE_URL}/api/servicioscontratadosusuario`, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error de red! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Servicios contratados por el usuario:', data);
                        // Aquí puedes procesar los datos recibidos y actualizar la interfaz de usuario según sea necesario
                    })
                    .catch(error => {
                        console.error('Error al obtener servicios contratados:', error);
                    });
            },
            obtenerServiciosContratadosProfesional: () => {
                // Obtener el token de acceso del almacenamiento local
                const token = localStorage.getItem('accessToken');

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