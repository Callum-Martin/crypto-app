import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />

          <List />
          </div>
      </div>
    );
  }
}

export default App;
