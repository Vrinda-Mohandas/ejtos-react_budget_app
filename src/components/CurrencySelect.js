import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [currencySign, setCurrencySign] = useState(currency)
  const onCurrencyChange = (value) => {
    setCurrencySign(value);
    if (value !== 'Choose...') {

      dispatch({
        type: 'CHG_CURRENCY',
        payload: value,
      });
    }
  }
  return (
    <div className='alert alert-primary'>
      <select className="custom-select" value="currencySign" id="signSelect01" onChange={(event) => onCurrencyChange(event.target.value)}>
        <option defaultValue>Choose...</option>
        <option value="$" name="dollar" >$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€" name="puro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>
      </select>
    </div>
  );
};
export default CurrencySelect;