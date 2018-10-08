import React from 'react';
import ListPokemons from './ListPokemons';
import Filter from './Filter';



class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="app-header">
          <Filter
            filterName={this.props.filterName}
          />
        </header>
        <ListPokemons
          pokemons={this.props.pokemons}
          name={this.props.name}
          filterName={this.props.name}

        />

    </React.Fragment>

    );
  }
}

export default Home;
