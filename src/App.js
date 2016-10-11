import React, { Component } from 'react';
import Graveyard from './components/Graveyard';
import Hand from './components/Hand';
import Deck from './components/Deck';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <h2>IT IS FROSTY TIME!</h2>
        </div>

        <div className="container">

          <Hand {...this.props} />

          <Deck {...this.props} />

          <Graveyard {...this.props} />
        </div>

      </div>
    );
  }
}

export default App;
