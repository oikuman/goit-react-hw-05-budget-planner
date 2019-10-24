import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './AppFolder/reducers';

const initialState = {
  budget: 0,
  expenses: [],
};

export const store = createStore(reducers, initialState, devToolsEnhancer());
