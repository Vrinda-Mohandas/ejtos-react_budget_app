import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, remaining, dispatch, currency } = useContext(AppContext);
  const [budgetTxt, setBudgetTxt] = useState(budget);

  const onBudgetChange = (newBudget) => {
    if (newBudget > 20000) {
      alert("Budget can not exceed 20000");
    } else if (remaining + (newBudget - budget) < 0) {
      alert("You cannot reduce the budget lower than the spending");
    } else {
      setBudgetTxt(newBudget);
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
    }
  }

  return (
    <div className='alert alert-secondary'>
      <label >Budget: {currency} </label>
      <input
        required='required'
        type='number'
        id='budget'
        step="10"
        value={budgetTxt}
        style={{ size: 10 }}
        onChange={(event) => onBudgetChange(event.target.value)} />
    </div>
  );
};
export default Budget;
