import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencySelect.css';
import Select from 'react-select'

const CurrencySelect = () => {
  const { dispatch } = useContext(AppContext);
  const ddOptions = [
    { key: "dollar", value: "$", label: "$ Dollar", style: { backgroundColor: 'yellow' } },
    { key: "pound", value: "£", label: "£ Pound", style: { backgroundColor: 'yellow' } },
    { key: "euro", value: "€", label: "€ Euro", style: { backgroundColor: 'yellow' } },
    { key: "rupee", value: "₹", label: "₹ Ruppee", style: { backgroundColor: 'yellow' } }
  ];
  const [currencySign, setCurrencySign] = useState(ddOptions[0]);
  const onCurrencyChange = (option) => {
    setCurrencySign(option);
    if (option.value !== 'Choose...') {

      dispatch({
        type: 'CHG_CURRENCY',
        payload: option.value,
      });
    }
  }
  const customStyles = {
    control: (styles) => ({ ...styles, backgroundColor: '#28fd9c', color: "white", size: '10' }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'white' : '#28fd9c',
      color: 'black',
    })
  }

  return (
    <div className='alert alert-secondary'>
      <Select options={ddOptions} value={currencySign}
        onChange={onCurrencyChange} styles={customStyles} />
    </div>

  );
};
export default CurrencySelect;