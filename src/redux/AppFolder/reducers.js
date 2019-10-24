import { combineReducers } from 'redux';
import * as types from './types';

const initialState = {
  budget: 0,
  expenses: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.amount;

    default:
      return state;
  }
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [action.expense, ...state];

    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id);

    default:
      return state;
  }
};

const reducers = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});

export default reducers;
