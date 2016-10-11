const rootReducer = function (state = {}, action) {
  switch (action.type) {
    case 'DRAW':
      return state;
    case 'PLAY':
      return state;
    default:
      return state;
  }
}

export default rootReducer;