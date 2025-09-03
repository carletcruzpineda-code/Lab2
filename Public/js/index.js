import { getPersonajes} from "../services/api.js";
const filtro = document.getElementById("filtro");
const btnBuscar = document.getElementById("btnBuscar");

async function cargarP() {
    const seleccion = filtro.value;
    try {
        const personajes = await getPersonajes (seleccion)
    } catch (error) {
    console.error("Prueba",error);

    
    }

}

async function crearPersonaje (personajes) {
    const contenedor = document.getElementById("personajesC");
    contenedor.innerHTML = "";
    personajes.forEach(function (personaje) {
     const cuadro = document.createElement("div")
     cuadro.classList.add("tarjeta")
     const nombre = document.createElement("h2")
     titulo.textcontent = personaje.name 
     const estatus = document.createElement("p")  
     estado.textContent = "status: " + personaje.status
     const imagen = document.createElement("img")  
    });
    
}
