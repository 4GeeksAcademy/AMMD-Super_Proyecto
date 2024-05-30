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
        },
        actions: {
            // Use getActions to call a function within a function
            cargarUsuarios: () => {
                fetch(BASE_URL+"/api/usuarios")
                    .then(res => res.json())
                    .then(data => setStore({ usuarios: data.results }))
                    .catch(err => console.error("Error al cargar usuarios:", err));
            },
            cargarProfesionales: () => {
                fetch(BASE_URL+"/api/profesionales")
                    .then(res => res.json())
                    .then(data => setStore({ profesionales: data.results }))
                    .catch(err => console.error("Error al cargar profesionales:", err));
            },
            cargarUsuario: (id) => {
                fetch(BASE_URL+"/api/usuario/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ usuarioSeleccionado: data.results }))
                    .catch(err => console.error("Error al cargar usuario:", err));
            },
            cargarProfesional: (id) => {
                fetch(BASE_URL+"/api/profesional/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ profesionalSeleccionado: data.results }))
                    .catch(err => console.error("Error al cargar profesional:", err));
            },
            crearUsuario: (email, password, navigate) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({email, password}),
                    redirect: "follow"
                };
                fetch(BASE_URL + "/api/crearusuario", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        navigate('/iniciosesioncliente');
                    })
                    .catch((error) => console.error("Error al crear usuario:", error));
            },
            crearProfesional: (email, password, navigate) => {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({email, password}),
                    redirect: "follow"
                };
                fetch(BASE_URL+"/api/crearprofesional", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        navigate('/iniciosesionprofesional');
                    })
                    .catch((error) => console.error("Error al crear profesional:", error));
            },
            iniciarSesionUsuario: (email, password, navigate) => {
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
                        setStore({ token: data.token });
                        navigate('/privadacliente');
                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
                    });
            },
            iniciarSesionProfesional: (email, password, navigate) => {
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
                        navigate('/privadaprofesional');
                    })
                    .catch((error) => {
                        console.error("Error al iniciar sesión:", error);
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