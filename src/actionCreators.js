export function drawCard (i) {
  return {
    type: 'DRAW',
    i: i
  };
}

export function playCard (i) {
  return {
    type: 'PLAY',
    i: i
  };
}

export function recycleCard (i) {
  return {
    type: 'RECYCLE',
    i: i
  };
}

export function thaurissanTick () {
  return {
    type: 'THAURISSAN'
  };
}