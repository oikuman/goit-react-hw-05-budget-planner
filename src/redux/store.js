import { createStore } from "redux";
import { reducers } from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = {
    budget: 0,
    expenses: []
};

export const store = createStore(reducers, initialState, devToolsEnhancer());
