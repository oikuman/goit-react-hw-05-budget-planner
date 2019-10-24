import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import css from './ExpensesTable.module.css';

const ExpensesTable = ({ expenses, removeExpense }) => {
  const Table = (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Expense name</th>
          <th className={css.th}>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, name, amount }) => (
          <tr key={id} className={css.tr}>
            <td className={css.td}>{name}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>
              <Button label="Delete" onClick={() => removeExpense(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return expenses.length > 0 && Table;
};

ExpensesTable.propTypes = {
  expenses: PropTypes.array.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default ExpensesTable;
