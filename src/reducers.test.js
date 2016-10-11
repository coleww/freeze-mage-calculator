import React from 'react';
import rootReducer from './reducers';

const initialState = {
  deck: [{name: 'foo'}, {name: 'bar'}],
  hand: [{name: 'baz'}],
  graveyard: [{name: 'zed'}]
};

it('handles drawing a card', () => {
  const output = rootReducer(initialState, {type: 'DRAW', i: 0, card: {name: 'foo'}})
  expect(output).toEqual({
    deck: [{name: 'bar'}],
    hand: [{name: 'baz'}, {name: 'foo'}],
    graveyard: [{name: 'zed'}]
  })
});

it('handles playing a card', () => {
  const output = rootReducer(initialState, {type: 'PLAY', i: 0, card: {name: 'baz'}})
  expect(output).toEqual({
    deck: [{name: 'foo'}, {name: 'bar'}],
    hand: [],
    graveyard: [{name: 'zed'}, {name: 'baz'}]
  })
});
