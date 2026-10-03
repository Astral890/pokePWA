// app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado correctamente.', reg.scope))
            .catch(err => console.error('Error al registrar el Service Worker.', err));
    });
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=24';
const catalog = document.getElementById('catalog');

async function fetchPokemon() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        renderCatalog(data.results);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        catalog.innerHTML = '<p>Error al cargar el catálogo. Si estás offline por primera vez, conéctate a internet para guardar los datos.</p>';
    }
}

function renderCatalog(items) {
    catalog.innerHTML = '';
    items.forEach(item => {
        // Extraer el ID de la URL para solicitar el sprite directamente
        const urlParts = item.url.split('/');
        const id = urlParts[urlParts.length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
        `;
        catalog.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchPokemon);