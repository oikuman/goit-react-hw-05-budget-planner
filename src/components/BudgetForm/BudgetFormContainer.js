import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
// import actions
import { setBudget } from '../../redux/AppFolder/actions';

const mapDispatchToProps = {
  setBudget,
};

const BudgetFormContainer = connect(
  null,
  mapDispatchToProps,
)(BudgetForm);

export default BudgetFormContainer;
