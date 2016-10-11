import React from 'react';
import rootReducer from './reducers';

const initialState = {
  deck: [{name: 'foo'}, {name: 'bar'}],
  hand: [{name: 'baz'}],
  graveyard: [{name: 'zed'}]
};

it('handles drawing a card and moving it to the hand', () => {
  const output = rootReducer(initialState, {type: 'DRAW', i: 0, card: {name: 'foo'}})
  expect(output).toEqual({
    deck: [{name: 'bar'}],
    hand: [{name: 'baz'}, {name: 'foo'}],
    graveyard: [{name: 'zed'}]
  })
});

it('handles playing a card and moving it to the graveyard', () => {
  const output = rootReducer(initialState, {type: 'PLAY', i: 0, card: {name: 'baz'}})
  expect(output).toEqual({
    deck: [{name: 'foo'}, {name: 'bar'}],
    hand: [],
    graveyard: [{name: 'zed'}, {name: 'baz'}]
  })
});

it('handles a Thaurissan tick decreasing cost of cards in hand', () => {
  const thaurissanState = {
    deck: [{name: 'foo', cost: 7}, {name: 'bar', cost: 7}],
    hand: [{name: 'baz', cost: 4}, {name: 'boo', cost: 0}],
    graveyard: [{name: 'zed', cost: 5}]
  }
  const output = rootReducer(thaurissanState, {type: 'THAURISSAN'})
  expect(output).toEqual({
    deck: [{name: 'foo', cost: 7}, {name: 'bar', cost: 7}],
    hand: [{name: 'baz', cost: 3}, {name: 'boo', cost: 0}],
    graveyard: [{name: 'zed', cost: 5}]
  })
});