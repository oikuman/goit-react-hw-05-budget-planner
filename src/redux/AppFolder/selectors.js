export const getTotalExpenses = state => {
  return state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
};

export const getBudget = state => state.budget;
