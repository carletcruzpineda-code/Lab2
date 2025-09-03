
 export async function getPersonajes(status = 'all') {
  const url = status === 'all'? 'https://rickandmortyapi.com/api/character' : `https://rickandmortyapi.com/api/character?status=${status}`;

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data.results;
  } catch (error) {
   
  console.error("Error al obtener personajes:", error);
  throw error ;

  }
}

  async function getEpisodios() {
  const url = "https://rickandmortyapi.com/api/episode"
  try {
    const respuestaE = await fetch(url);
    const dataE = await respuestaE.json();
    return dataE.results;
  } catch (error) {
    console.error("error al conseguir episodios: ", error)
  }
  }





