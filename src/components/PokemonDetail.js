import React from 'react';
import {Link} from 'react-router-dom';

class PokemonDetail extends React.Component {



  render(){
      const { name, sprites, height, weight, abilities, evolves_to} = this.props.pokemons[this.props.match.params.id -1];

      if (this.props.pokemons.length === 0) {
        return null;
      }
      else{
        return (
          <div className='container-detail'>
            <div className='app-item-detail'>
              <div className='container-imagen-detail'>
                <img className='imagen-detail'src={sprites.front_default}  alt=""/>
                <img className='imagen-detail'src={sprites.back_default}  alt=""/>
                </div>
              <div className='description-detail'>
                <h2 className='title-detail'>{name}</h2>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <div className="abilities-detail">
                  <p className="ability-name-detail"> Ability: </p>
                  {abilities.map(pokemonAbilities =><p className="ability-name-detail">{pokemonAbilities.ability.name.toUpperCase()}</p>)}
                </div>
                {/*<div className="evolves-detail">
                  {evolves_to.map(pokemonEvolves =><p className="evolves-name-detail">{pokemonEvolves.species.name.toUpperCase()}</p>)}
                </div>*/}
                <Link to="/" className="back-btn"> Volver </Link>
              </div>
            </div>
          </div>
        );
      }
    }
  }

export default PokemonDetail;
