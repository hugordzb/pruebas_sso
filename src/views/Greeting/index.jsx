import React, { Component } from 'react';
import Login from '../Login/index';

class Greeting extends Component {
  render() {
    return (
      <div>
        {/*<TemplatePage>
          <Typography variant="h1">¡Bienvenido!</Typography>
          <Typography variant="subtitle1">Aqui puedes encontrar todas tus aplicaciones</Typography>
        </TemplatePage>*/}
    <Login />
      </div>
    );
  }
}

export default Greeting;