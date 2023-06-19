import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select'

const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);
    const ddOptions = [
        { key: "dollar", value: "$", label: "$ Dollar", style: { backgroundColor: 'yellow' } },
        { key: "pound", value: "£", label: "£ Pound", style: { backgroundColor: 'yellow' } },
        { key: "euro", value: "€", label: "€ Euro", style: { backgroundColor: 'yellow' } },
        { key: "rupee", value: "₹", label: "₹ Ruppee", style: { backgroundColor: 'yellow' } }
    ];

    const getDefaultVal = (value) => {
        const selDefOption = ddOptions.find((item) => item.value === value);
        return selDefOption ? { ...selDefOption, label: `Currency(${selDefOption.label})` } : {};
    }

    const [currencySign, setCurrencySign] = useState(getDefaultVal(currency));

    const onCurrencyChange = (selOption) => {
        // The label shown on the Select has to be different from the list
        selOption.label = `Currency(${selOption.label})`;
        setCurrencySign(selOption);
        if (selOption.value !== 'Choose...') {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: selOption.value,
            });
        }
    }

    const customStyles = {
        dropdownIndicator: (styles) => ({ ...styles, color: "white" }),
        singleValue: (styles) => ({ ...styles, color: "white" }),
        control: (styles) => ({ ...styles, backgroundColor: '#28fd9c', borderColor: "white", size: '10' }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'white' : '#28fd9c',
            color: 'black',
        })
    }

    return (
        <div className='alert alert-secondary'>
            <Select
                options={ddOptions}
                value={currencySign}
                onChange={onCurrencyChange}
                styles={customStyles}
                components={{ IndicatorSeparator: () => null }} />
        </div>
    );
};
export default CurrencySelect;