import React from 'react';
import calculateMaxDamage from '../calculateMaxDamage';
import Card from './Card';
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
    const maxDamageCombo = calculateMaxDamage(this.state.mana, this.props.hand);
    return (
      <div className="damage">
        Mana Crystals: {this.state.mana}
        <button className="decrementMana" onClick={this.decrementMana}>-</button>
        <button className="incrementMana" onClick={this.incrementMana}>+</button>

        MAXIMUM DAMAGE: {maxDamageCombo.damage}
        <div className="area maxDamageCombo">
          {maxDamageCombo.cards.map((card, i) =>
            <Card {...this.props} key={i} i={i} card={card} />)}
        </div>
      </div>
    );
  }
});

export default MaxDamage;