
 export async function getPersonajes(status = 'all') {
const url = status === 'all' 
 ? 'https://rickandmortyapi.com/api/character' 
: `https://rickandmortyapi.com/api/character?status=${status}`;

  try {
    const respuesta = await fetch("url");
     const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}

