const rootReducer = function (state = {}, action) {
  // the data set will not really grow, so cloning the state like this each time seems ok?
  const graveyard = state.graveyard.slice(0);
  const deck = state.deck.slice(0);
  const hand = state.hand.slice(0);

  switch (action.type) {
    case 'DRAW':
      // mutating the cloned arrays seems...very un-react-like?
      hand.push(action.card);
      deck.splice(action.i, 1);
      return {
        ...state,
        deck: deck,
        hand: hand
      };
    case 'PLAY':
      graveyard.push(action.card);
      hand.splice(action.i, 1);
      return {
        ...state,
        graveyard: graveyard,
        hand: hand
      };
    default:
      return state;
  }
}

export default rootReducer;