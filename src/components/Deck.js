import React from 'react';
import Card from './Card';

const Deck = React.createClass({
  render() {
    return (
      <div className="area deck">
        {this.props.deck.map((card, i) =>
          <Card {...this.props} key={i} i={i} card={card} />)}
      </div>
    );
  }
});

export default Deck;