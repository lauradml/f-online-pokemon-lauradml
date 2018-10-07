import React from 'react';

class Pokemon extends React.Component {

  render(){

      const{name, id}= this.props.item;
    return (
      <React.Fragment>
          <h1>{name}</h1>
          <p>{id}</p>
        
      </React.Fragment>

    );
  }
}

export default Pokemon;
