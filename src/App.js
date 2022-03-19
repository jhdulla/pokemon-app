import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './components/pokemon';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState(null);



  const fetchPokemon = () => {
    console.log("fetch");
    const url = "https://pokeapi.co/api/v2/pokemon";
    axios.get(url)
      .then(res => {
        const pokemons = res.data;

        // pokemons.results.forEach(element => {
        //   const result = sendGetRequest(element.url);
        //   element.pokemonInfo = result;
        //   console.log("Pokemon result", result);

        // });

        setPokemon(pokemons);
      })
  }


  const handleChangePokemon = () => {

  };



  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Pokemon pokemons={pokemon} />
    </div>
  );


}

export default App;
