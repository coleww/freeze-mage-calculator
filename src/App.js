import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>IT IS FROSTY TIME!</h2>
        </div>
        <div className="container">
          <div className="hand">
            in hand: {this.props.hand.length}
          </div>
          <div className="deck">
            in deck: {this.props.deck.length}
          </div>
          <div className="graveyard">
            in graveyard: {this.props.graveyard.length}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
