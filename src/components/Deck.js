import React from 'react';
import Card from './Card';

const Deck = React.createClass({
  render() {
    return (
      <div className="area deck">
        <div className="areaHeader">
          Deck
        </div>
        <div className="cards">
          {this.props.deck.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} onClick={this.props.drawCard.bind(null, i)}/>)}
        </div>
      </div>
    );
  }
});

export default Deck;