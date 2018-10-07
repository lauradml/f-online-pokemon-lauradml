import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';



class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
    pokemons: [],
    name:""
    }
}
componentDidMount() {
  this.getPokemons();
}

getPokemons() {
		for (let i = 1; i <= 26; i++) {
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
      <home
          pokemons={this.state.pokemons}
          name={this.state.name}
      />

      </div>
    );
  }
}

export default App;
