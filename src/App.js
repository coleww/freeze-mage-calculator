import React, { Component } from 'react';
import Graveyard from './components/Graveyard';
import Hand from './components/Hand';
import Deck from './components/Deck';
import EmperorThaurissan from './components/EmperorThaurissan';
import MaxDamage from './components/MaxDamage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <h2>IT IS FROSTY TIME!</h2>
        </div>

        <div className="container">
          <div className="areas">
            <Deck {...this.props} />
            <Hand {...this.props} />
            <Graveyard {...this.props} />
          </div>
          <EmperorThaurissan {...this.props} />
          <MaxDamage {...this.props} />
        </div>

      </div>
    );
  }
}

export default App;
