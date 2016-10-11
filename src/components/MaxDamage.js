import React from 'react';

const MaxDamage = React.createClass({
  getInitialState() {
    return {mana: 1};
  },
  decrementMana() {
    let newMana = this.state.mana - 1
    if (newMana < 1) newMana = 1
    this.setState({mana: newMana})
  },
  incrementMana() {
    let newMana = this.state.mana + 1
    if (newMana > 10) newMana = 10
    this.setState({mana: newMana})
  },
  render() {
    return (
      <div className="damage">
        <h3> Max Damage in Hand </h3>
        Mana Crystals: {this.state.mana}
        <button className="decrementMana" onClick={this.decrementMana}>-</button>
        <button className="incrementMana" onClick={this.incrementMana}>+</button>
      </div>
    );
  }
});

export default MaxDamage;