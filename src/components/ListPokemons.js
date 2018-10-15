import React from 'react';
import Pokemon from './Pokemon';
import {Link} from 'react-router-dom';


class ListPokemons extends React.Component {
  render(){
    return (
      <ul className="app-list">
        {this.props.pokemons
          .filter(item => {
              return item.name.toLowerCase().includes(this.props.filterName);
            })
          .sort((a, b) => a.id - b.id)
          .map(item=>{
          return (
            <li className="app-item" key={item.id}>
              <Link to={`/pokemonDetail/${item.id}`} >
                  <Pokemon item={item}/>
              </Link>
            </li>
          );
        })}
      </ul>

    );
  }
}

export default ListPokemons;
