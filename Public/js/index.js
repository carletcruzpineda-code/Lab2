import { getPersonajes,getEpisodios} from "../services/api.js";
const filtro = document.getElementById("filtro");
const btnBuscar = document.getElementById("btnBuscar");

async function cargarP() {
    const seleccion = filtro.value;
    try {
        const personajes = await getPersonajes (seleccion)
        crearPersonaje(personajes);
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
     nombre.textContent = personaje.name 
     const estatus = document.createElement("p")  
     estatus.textContent = "status: " + personaje.status
     const imagen = document.createElement("img")  
     imagen.src = personaje.image

     cuadro.appendChild(nombre);
     cuadro.appendChild(estatus);
     cuadro.appendChild(imagen);
   
    contenedor.appendChild(cuadro)

    });
    
}

btnBuscar.addEventListener("click",cargarP)
cargarP() ;