import React from 'react';
import calculateMaxDamage from '../calculateMaxDamage';
import Card from './Card';
import EmperorThaurissan from './EmperorThaurissan';

const MaxDamage = React.createClass({
  getInitialState() {
    return {mana: 10};
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
  renderManaCrystals() {
    const currentMana = this.state.mana;
    return [...Array(currentMana)].map((e, i) => <img src={`${process.env.PUBLIC_URL}/imgs/mana.png`} alt="mana crystal" className="manaCrystal" key={i} />)
  },
  render() {
    const maxDamageCombo = calculateMaxDamage(this.state.mana, this.props.hand);
    return (
      <div className="areas">
        <div className="area controls">
          <EmperorThaurissan {...this.props} />
          <div className="manaCrystalControls">
            Available Mana: {this.state.mana}&nbsp;&nbsp;
            <button className="decrementMana" onClick={this.decrementMana}>-</button>
            <button className="incrementMana" onClick={this.incrementMana}>+</button>
            <div className="manaCrystals">
              {this.renderManaCrystals()}
            </div>
          </div>
        </div>
        <div className="area maxDamageCombo">
          <div className="areaHeader">
            Max Damage: {maxDamageCombo.damage}
          </div>
          <div className="cards">
            {maxDamageCombo.cards.map((card, i) =>
              <Card {...this.props} key={i} i={i} card={card} />)}
          </div>
        </div>
        <div className="area credits">
          wow filler cool nice!
        </div>
      </div>
    );
  }
});

export default MaxDamage;