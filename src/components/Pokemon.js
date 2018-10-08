import React from 'react';

class Pokemon extends React.Component {

  render(){

      const{name, id, sprites, types }= this.props.item;
    return (
      <div className="card">
          <img className="photo-card" src={sprites.front_default} alt={name}/>
          <p className="id-card" > ID /{id}</p>
          <h1 className="tite-card">{name}</h1>
          <p className="type-card">{types.map(pokemonType => <p>{pokemonType.type.name}</p>)}</p>

      </div>

    );
  }
}

export default Pokemon;
