import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
// import actions
import { removeExpense } from '../../redux/AppFolder/actions';

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = {
  removeExpense,
};

const ExpensesTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);

export default ExpensesTableContainer;
