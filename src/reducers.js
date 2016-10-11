const rootReducer = function (state = {}, action) {
  // the data set will not really grow, so cloning the state like this each time seems ok?
  const graveyard = state.graveyard.slice(0);
  const deck = state.deck.slice(0);
  const hand = state.hand.slice(0);

  switch (action.type) {
    case 'DRAW':
      let cardDrawn = deck[action.i]
      // mutating the cloned arrays seems...very un-react-like?
      console.log(cardDrawn)
      hand.push(cardDrawn);
      deck.splice(action.i, 1);
      return {
        ...state,
        deck: deck,
        hand: hand
      };
    case 'PLAY':
      let cardPlayed = hand[action.i]
      graveyard.push(cardPlayed);
      hand.splice(action.i, 1);
      if (cardPlayed.createOnPlay) {
        deck.push(cardPlayed.createOnPlay)
      }
      return {
        deck: deck,
        graveyard: graveyard,
        hand: hand
      };
    case 'THAURISSAN':
      return {
        ...state,
        hand: hand.map((card) => {
          let newCost = card.cost - 1;
          if (newCost < 0) {
            newCost = 0
          }
          return {...card, cost: newCost}
        })
      };
    default:
      return state;
  }
}

export default rootReducer;