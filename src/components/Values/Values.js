import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from '../Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, totalExpenses }) => {
  const balance = budget - totalExpenses;

  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={totalExpenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default Values;
