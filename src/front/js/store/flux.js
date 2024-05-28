const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuarios: [],
			profesionales: [],
			usuarioSeleccionado: [],
			profesionalSeleccionado: []
		},
		actions: {
			// Use getActions to call a function within a function
			cargarUsuarios: () => {
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/usuarios")
					.then(res => res.json())
					.then(data => setStore({ usuarios: data.results }))
					.catch(err => console.error("Error al cargar usuarios:", err));
			},
			cargarProfesionales: () => {
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/profesionales")
					.then(res => res.json())
					.then(data => setStore({ profesionales: data.results }))
					.catch(err => console.error("Error al cargar profesionales:", err));
			},
			cargarUsuario: (id) => {
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/usuario/" + id)
					.then(res => res.json())
					.then(data => setStore({ usuarioSeleccionado: data.results }))
					.catch(err => console.error("Error al cargar usuario:", err));
			},
			cargarProfesional: (id) => {
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/profesional/" + id)
					.then(res => res.json())
					.then(data => setStore({ profesionalSeleccionado: data.results }))
					.catch(err => console.error("Error al cargar profesional:", err));
			},
			// COMPROBAR ESTE FETCH
			crearUsuario: (usuario) => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "aplication/json"
					},
					body: JSON.stringify(usuario),
					redirect: "follow"
				};
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/crearusuario", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error("Error al crear usuario:", error));
			},
			// COMPROBAR ESTE FETCH
			crearProfesional: (profesional) => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "aplication/json"
					},
					body: JSON.stringify(profesional),
					redirect: "follow"
				};
				fetch("https://obscure-disco-4jjqqxj49vrghj5gv-3001.app.github.dev/api/crearprofesional", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error("Error al crear profesional:", error));
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
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
