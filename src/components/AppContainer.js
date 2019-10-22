import { connect } from "react-redux";
import App from "./App";
// import actions
import { addExpense, removeExpense } from "../redux/actions";

const mapStateToProps = state => ({
    budget: state.budget,
    expenses: state.expenses
});

const mapDispatchToProps = {
    addExpense,
    removeExpense
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
