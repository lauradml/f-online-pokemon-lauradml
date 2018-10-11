import React from 'react';
import {Link} from 'react-router-dom';

class PokemonDetail extends React.Component {



  render(){
      const { name, sprites} = this.props.pokemons[this.props.match.params.id];

      if (this.props.pokemons.length === 0) {
        return null;
      }
      else{
        return (
          <div className='container-detail'>
            <div className='app-item-detail'>
              <div className='container-imagen-detail'>
                <img className='imagen-detail'src={sprites.front_default}  alt=""/>
                </div>
              <div className='description-detail'>
                <h2 className='title-detail'>{name}</h2>

                <Link to="/" className="back-btn"> Volver </Link>
              </div>
            </div>
          </div>
        );
      }
    }
  }

export default PokemonDetail;
