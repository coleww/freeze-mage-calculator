import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState = {
  hand: ['foo'],
  deck: [],
  graveyard: []
};

// TODO: add dev/prod logic to ensure this doesn't "go live", lol
const store = createStore(rootReducer, defaultState);


export default store;