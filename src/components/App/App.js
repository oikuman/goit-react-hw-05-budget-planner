import React from 'react';
import BudgetFormContainer from '../BudgetForm/BudgetFormContainer';
import ExpenseFormContainer from '../ExpensesForm/ExpenseFormContainer';
import ExpensesTableContainer from '../ExpensesTable/ExpensesTableContainer';
import ValuesContainer from '../Values/ValuesContainer';
import css from './App.module.css';

const App = () => (
  <div className={css.container}>
    <BudgetFormContainer />
    <ValuesContainer />
    <ExpenseFormContainer />
    <ExpensesTableContainer />
  </div>
);

export default App;
