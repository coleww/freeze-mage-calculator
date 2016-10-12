import React from 'react';

const Card = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="cardCost">{this.props.card.cost}</div>
        <img
          className="cardImg"
          src={`${process.env.PUBLIC_URL}/imgs/${this.props.card.imgSrc}.png`}
          alt={this.props.card.name}
          onClick={this.props.onClick} />
      </div>
    );
  }
});

export default Card;