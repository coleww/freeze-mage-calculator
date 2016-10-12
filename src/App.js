import React, { Component } from 'react';
import Graveyard from './components/Graveyard';
import Hand from './components/Hand';
import Deck from './components/Deck';
import MaxDamage from './components/MaxDamage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="areas">
            <Deck {...this.props} />
            <Hand {...this.props} />
            <Graveyard {...this.props} />
          </div>
          <MaxDamage {...this.props} />
        </div>

      </div>
    );
  }
}

export default App;
