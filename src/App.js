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
		for (let i = 1; i <= 2; i++) {
			fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
				.then(response => response.json())
				.then(response1 => {
					console.log(response1)
					this.setState({
						pokemons:
							[...this.state.pokemons, response1]
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
