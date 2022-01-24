import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './pokemon';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        {
          pokemons.map((pokemonInfo) => {
            return <Pokemon key={pokemonInfo.id} pokemons={pokemonInfo}/>
          })
        }
      </div>
    );
  }
}

export default App;