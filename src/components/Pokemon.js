import React from 'react';

class Pokemon extends React.Component {
  noEvolve(evolve_from_specie){
      if (evolve_from_specie === null) {
        return <p className="evolve-card" >Evolves from: none </p>

      } else {
        return <p className="evolve-card" >Evolves from: {evolve_from_specie}</p>
      }
    }

  render(){

      const{name, id, sprites, types, evolve_from_specie }= this.props.item ;
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
          {this.noEvolve(evolve_from_specie)}
        </div>

      </div>

    );
  }
}

export default Pokemon;
