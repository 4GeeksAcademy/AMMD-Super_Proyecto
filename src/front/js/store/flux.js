require('dotenv').config();
const BASE_URL = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            usuarios: [
               
            ],
            profesionales: [
                {
                "apellidos": "Pérez",
                "descripcion": "Chef",
                "direccion": "Calle Falsa 123",
                "email": "1",
                "foto_de_perfil": "foto1.jpg",
                "id": 1,
                "info_adicional": "Disponible para eventos privados.",
                "is_active": true,
                "localizacion": "Madrid",
                "nombre": "Juan",
                "telefono": "123456789",
                "tipo_servicio_barman": false,
                "tipo_servicio_chef": "picapica",
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false
            },
            {
                "apellidos": "Martínez",
                "descripcion": "sumiller",
                "direccion": "Avenida Siempre Viva 742",
                "email": "chefdavid@hotmail.com",
                "foto_de_perfil": "foto2.jpg",
                "id": 2,
                "info_adicional": "Experiencia internacional.",
                "is_active": true,
                "localizacion": "Barcelona",
                "nombre": "David",
                "telefono": "987654321",
                "tipo_servicio_barman": false,
                "tipo_servicio_chef": "taller de cocina",
                "tipo_servicio_jamonero": true,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": false
            },
            {
                "apellidos": "López",
                "descripcion": "Chef pastelero con 10 años de experiencia.",
                "direccion": "Calle de la Paz 15",
                "email": "chef",
                "foto_de_perfil": "foto3.jpg",
                "id": 3,
                "info_adicional": "Especialidad en postres franceses.",
                "is_active": true,
                "localizacion": "Valencia",
                "nombre": "Carlos",
                "telefono": "654321987",
                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": true,
                "tipo_servicio_sumiller": false
            },
            {
                "apellidos": "Fernández",
                "descripcion": "Sumiller",
                "direccion": "Plaza Mayor 1",
                "email": "chef@chef",
                "foto_de_perfil": "foto4.jpg",
                "id": 4,
                "info_adicional": "Trabaja en colaboración con bodegas locales.",
                "is_active": true,
                "localizacion": "Sevilla",
                "nombre": "Ainhoa",
                "telefono": "321654987",
                "tipo_servicio_barman": false,
                "tipo_servicio_chef": false,
                "tipo_servicio_jamonero": false,
                "tipo_servicio_pastelero": false,
                "tipo_servicio_sumiller": true
            }
            ],
            usuarioSeleccionado: [],
            profesionalSeleccionado: [],
            token: null,
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
                fetch(BASE_URL + "/api/iniciarsesionusuario", requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {

                        setStore({ token: data.token, usuarios: data.user });
                        const store = getStore();
                        console.log(store.usuarios)
                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
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
                fetch(BASE_URL + "/api/iniciarsesionprofesional", requestOptions)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ token: data.token });

                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
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

// aa