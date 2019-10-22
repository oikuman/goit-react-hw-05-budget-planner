import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import BudgetFormContainer from "./BudgetFormContainer";
import ExpenseForm from "./ExpenseForm";
import ExpensesTable from "./ExpensesTable";
import Values from "./Values";

const Container = styled.div`
    display: grid;
    grid-template-columns: 340px 1fr;
    align-items: flex-start;
    grid-gap: 24px;
    max-width: 960px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
`;

const App = props => {
    const calculateTotalExpenses = expenses => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const calculateBalance = (budget, expenses) => budget - expenses;

    const addExpense = ({ name, amount }) => {
        const expense = {
            id: shortid.generate(),
            name,
            amount: Number(amount)
        };

        props.addExpense(expense); // ADD_EXPENSE
    };

    const removeExpense = id => {
        props.removeExpense(id); // REMOVE_EXPENSE
    };

    const { expenses, budget } = props; // from props
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
        <Container>
            {/*  */}
            <BudgetFormContainer />
            <Values
                budget={budget}
                expenses={totalExpenses}
                balance={balance}
            />
            <ExpenseForm onSave={addExpense} />
            {expenses.length > 0 && (
                <ExpensesTable items={expenses} onRemove={removeExpense} />
            )}
        </Container>
    );
};

export default App;
