import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import PokemonDetail from'./components/PokemonDetail';



class App extends Component {
    constructor(props) {
    super(props);
      this.filterName = this.filterName.bind(this);

    this.state = {
    pokemons: [],
    name:""
    }
}
filterName(e) {
    const resultado = e.currentTarget.value.toLowerCase();
    this.setState({
      name: resultado
    });
  }
componentDidMount() {
  this.getPokemons();
}

getPokemons() {
		for (let i = 1; i <= 3; i++) {
      Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(response => response.json()),
        fetch('https://pokeapi.co/api/v2/pokemon-species/' + i + '/')
        .then(response => response.json()),
        fetch('https://pokeapi.co/api/v2/evolution-chain/' + i + '/' )
        .then(response => response.json()),
      ])
				.then(([pokemon, pokemonSpecie, pokemonEvolves ])=> {
          pokemon.evolve_from_specie = pokemonSpecie.evolves_from_species && pokemonSpecie.evolves_from_species.name;
          pokemon.evolve_to =  pokemonEvolves.chain.evolves_to ;
					this.setState({
						pokemons:
							[...this.state.pokemons,pokemon],
					})
				})
		}
	}




  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ () =><Home
              pokemons={this.state.pokemons}
              name={this.state.name}
              filterName={this.filterName}
          />} />
          <Route path="/PokemonDetail/:id" render={(props) =>
             <PokemonDetail
             match={props.match}
             pokemons={this.state.pokemons}
              />} />
        </Switch>

      </div>
    );
  }
}

export default App;
