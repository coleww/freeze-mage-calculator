import React from 'react';
import Card from './Card';

const Graveyard = React.createClass({
  render() {
    return (
      <div className="area graveyard">
        <div className="areaHeader">
          Graveyard
        </div>
        <div className="cards">
          {this.props.graveyard.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} onClick={this.props.recycleCard.bind(null, i)}/>)}
        </div>
      </div>
    );
  }
});

export default Graveyard;