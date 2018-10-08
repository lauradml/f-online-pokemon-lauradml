import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div className="filter-item">
        <input className="filter-name" type="text" id="f-title" name="f-title" onChange={this.props.filterName} placeholder="Filtra pokemons por nombre"/>

      </div>

    );
  }
}

export default Search;
