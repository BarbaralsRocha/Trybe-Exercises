import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './pokemon';

//exibir um pokemon de cada vez => ok
//colocar um botao => ok
// colocar evento no botao para ir para o proximo => ok
//fazer verificacao se esta no ultimo => ok

//

//dois botoes contendo os tipos Fire e Psychic
//quando apertar o botao fire, circular somente os pokemons daquele tipo
//quando apertar o botao Psychic, circular somente os pokemons daquele tipo
//um dos botoes ja deve ser inicializado no set.states


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickFire = this.handleClickFire.bind(this)
    this.handleClickPsychic = this.handleClickPsychic.bind(this)
  }

  handleClickFire() {
    const fire = pokemons.filter((pokemon) => pokemon.type === 'Fire').id
    pokemons = fire;
    return this.handleClick
  }

  handleClick() {


    if (this.state.index === pokemons.length - 1) {
      return this.setState({
        index: 0
      })
    }
    
    this.setState((estadoAnterior, _props) => ({
      index: estadoAnterior.index + 1,
    }))

  }



  handleClickPsychic() {
    return pokemons.filter((pokemon) => pokemon.type === 'Psychic')
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokemon key={pokemons[this.state.index].id} pokemons={pokemons[this.state.index]} />
        <button onClick={this.handleClick}>Próximo Pokémon</button>
        <button onClick={this.handleClickFire}>Fire</button>
        <button onClick={this.handleClickPsychic}>Psychic</button>
      </div>
    );
  }
}

export default App;