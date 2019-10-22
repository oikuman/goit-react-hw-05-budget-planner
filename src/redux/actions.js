import * as types from "./types";

//  expenses

export const addExpense = expense => ({
    type: types.ADD_EXPENSE,
    expense
});

export const removeExpense = id => ({
    type: types.REMOVE_EXPENSE,
    id
});

//  budget

export const setBudget = amount => ({
    type: types.SET_BUDGET,
    amount
});
