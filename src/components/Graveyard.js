import React from 'react';
import Card from './Card';

const Graveyard = React.createClass({
  render() {
    return (
      <div className="area graveyard">
        {this.props.graveyard.map((card, i) =>
          <Card {...this.props} key={i} i={i} card={card} />)}
      </div>
    );
  }
});

export default Graveyard;