import React from 'react';
import RepoList from './ListPokemons';



class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="app-header">


        </header>
        <ListPokemons
          repos={this.props.pokemons}
          name={this.props.name}

        />

    </React.Fragment>

    );
  }
}

export default Home;
