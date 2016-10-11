export function drawCard (card, i) {
  return {
    type: 'DRAW',
    card: card,
    i: i
  };
}

export function playCard (card, i) {
  return {
    type: 'PLAY',
    card: card,
    i: i
  };
}