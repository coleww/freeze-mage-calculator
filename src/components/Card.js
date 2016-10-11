import React from 'react';

const Card = React.createClass({
  render() {
    return (
      <div className="card">
        Cost: {this.props.card.cost}
        <img className="cardImg" src={`${process.env.PUBLIC_URL}/imgs/${this.props.card.imgSrc}.png`} alt={this.props.card.name}/>
      </div>
    );
  }
});

export default Card;