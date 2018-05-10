import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
      </div>
    );
  }
}

class Sub extends Component {
  render() {
    return (
        <p>Subtitle</p>
    );
  }
}

//export default App;

module.exports = {
  App,
  Sub
};