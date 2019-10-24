import { connect } from 'react-redux';
import { getTotalExpenses } from '../../redux/AppFolder/selectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: state.budget,
  totalExpenses: getTotalExpenses(state),
});

const ValuesContainer = connect(
  mapStateToProps,
  null,
)(Values);

export default ValuesContainer;
