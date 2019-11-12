import React, { Component } from 'react';
import TemplatePage from '../../components/TemplatePage';
import { Typography } from '@material-ui/core';

class Greeting extends Component {
  render() {
    return (
      <div>
        <TemplatePage>
          <Typography variant="h1">¡Bienvenido!</Typography>
          <Typography variant="subtitle1">Aqui puedes encontrar todas tus aplicaciones</Typography>
        </TemplatePage>
      </div>
    );
  }
}

export default Greeting;