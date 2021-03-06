import React, { Component } from 'react';
import ContenedorVideo from './containers/ContenedorVideo.jsx';
import ContenedorDescripcion from './containers/ContenedorDescripcion.jsx';
import ContenedorVideo from './containers/ContenedorChat.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ContenedorVideo />
          <ContenedorChat />
          <ContenedorDescripcion />

        </div>
      </div>
    );
  }
}

export default App;
