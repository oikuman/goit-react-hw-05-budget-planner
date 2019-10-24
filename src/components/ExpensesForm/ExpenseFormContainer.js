import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
// import actions
import { addExpense } from '../../redux/AppFolder/actions';

const mapDispatchToProps = {
  addExpense,
};

const ExpenseFormContainer = connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);

export default ExpenseFormContainer;
