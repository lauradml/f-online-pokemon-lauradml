import React from 'react';

class Pokemon extends React.Component {

  render(){

      const{name}= this.props.item;
    return (
      <React.Fragment>

          <h1>{name}</h1>

      </React.Fragment>

    );
  }
}

export default Pokemon;
