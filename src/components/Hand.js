import React from 'react';
import Card from './Card';

const Hand = React.createClass({
  render() {
    return (
      <div className="area hand">
        <div className="areaHeader">
          Hand
        </div>
        <div className="cards">
          {this.props.hand.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} onClick={this.props.playCard.bind(null, i)} />)}
        </div>
      </div>
    );
  }
});

export default Hand;