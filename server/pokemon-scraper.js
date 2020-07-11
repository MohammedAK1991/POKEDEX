const fetch = require('node-fetch');
const pokemonsURL = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=151';
const createImageURL = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const jsonServer = 'http://localhost:3002/pokemon';
const ourURL = 'http://localhost:5000/pokemon'
fetch(pokemonsURL)
  .then(response => response.json())
  .then(async parsed => {
    console.log(parsed);
    for (let i=0; i < parsed.results.length; i++) {
      const pokemon = {
        id: i+1,
        image: createImageURL(i+1),
        ...parsed.results[i],
      };
      await fetch(ourURL, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon)
      })
    }
  })