// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('dataContainer');

fetchBtn.addEventListener('click', () => {
    fetch('https://ghibliapi.vercel.app/films?limit=6')
        .then(response => response.json())
        .then(data => {
            const peliculas = data;
            renderMovies(peliculas);
        })
        .catch(error => {
            console.error('Error fetching data', error);
            dataContainer.innerHTML = 'Fallo en la carga de peliculas.';
            
        })
    fetchBtn.classList.add('active');
    axiosBtn.classList.remove('active');
});

// Implementa las Solicitudes con Axios

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
    axios.get('https://ghibliapi.vercel.app/films?limit=6')
        .then(response => {
            const peliculas = response.data;
            renderMovies(peliculas);
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
    axiosBtn.classList.add('active');
    fetchBtn.classList.remove('active');
});

// Ejemplo de función de renderizado:
function renderMovies(peliculas) {
    dataContainer.innerHTML = '';
    peliculas.forEach(pelicula => {
        const card = document.createElement('section');
        card.classList.add('card')

        const image = document.createElement('img');
        image.src = pelicula.image
        image.alt = pelicula.title

        const title = document.createElement('h2')
        title.textContent = pelicula.title

        const director = document.createElement('p');
        director.textContent = `Director: ${pelicula.director}`;

        const year = document.createElement('p');
        year.textContent = `Año: ${pelicula.release_date}`;

        const description = document.createElement('p');
        description.textContent = pelicula.description;        
                
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(director);
        card.appendChild(year);
        card.appendChild(description);

        dataContainer.appendChild(card)
    });
}