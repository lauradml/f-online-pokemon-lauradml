import React from 'react';

class Pokemon extends React.Component {

  render(){

      const{name, id, sprites, types }= this.props.item;
    return (
      <div className="card">
        <div className="image-card">
          <img className="photo-card" src={sprites.front_default} alt={name}/>
          <p className="id-card" >   ID / {id}</p>
        </div>
        <div className="description-card">
          <h1 className="titel-card">{name}</h1>
          <div className="type-card">
            {types.map(pokemonType => <p className="type-name-card">{pokemonType.type.name.toUpperCase()}</p>)}
          </div>
        </div>

      </div>

    );
  }
}

export default Pokemon;
