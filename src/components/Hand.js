import React from 'react';
import Card from './Card';

const Hand = React.createClass({
  render() {
    return (
      <div className="area hand">
        <h3>Hand</h3>
        <div className="cards">
          {this.props.hand.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} />)}
        </div>
      </div>
    );
  }
});

export default Hand;