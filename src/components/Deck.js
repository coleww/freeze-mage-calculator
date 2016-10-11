import React from 'react';
import Card from './Card';

const Deck = React.createClass({
  render() {
    return (
      <div className="area deck">
        <h3>Deck</h3>
        <div className="cards">
          {this.props.deck.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} />)}
        </div>
      </div>
    );
  }
});

export default Deck;