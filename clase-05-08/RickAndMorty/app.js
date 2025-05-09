document.addEventListener('DOMContentLoaded', () =>{
    const container = document.getElementById('characterContainer');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const personajes = data.results;
            personajes.forEach(personaje => {
                const card = document.createElement('section');
                card.classList.add('card')

                const image = document.createElement('img');
                image.src = personaje.image
                image.alt = personaje.name

                const name = document.createElement('h2')
                name.textContent = personaje.name
                
                card.appendChild(image)
                card.appendChild(name)

                container.appendChild(card)
            });
        })
        .catch(error => {
            console.error('Error fetching data', error);
            container.innerHTML = 'Fallo en la carga de personajes.';
            
        })
})