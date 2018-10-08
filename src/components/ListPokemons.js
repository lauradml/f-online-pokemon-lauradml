import React from 'react';
import Pokemon from './Pokemon';


class ListPokemons extends React.Component {
  render(){
    return (
      <ul className="app-list">
        {this.props.pokemons
          .filter(item => {
              return item.name.toLowerCase().includes(this.props.filterName);
            })
          .map(item=>{
          return (
            <li className="app-item" key={item.id}>
                  <Pokemon item={item}/>
            </li>
          );
        })}
      </ul>

    );
  }
}

export default ListPokemons;
