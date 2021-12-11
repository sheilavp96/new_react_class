import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        setCounter(counter + 1);
    };
    const handleSubstract = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    const handleReset = () => {
        setCounter(value);
    };
    return (
        <>
            <h1 style={{ margin: '20px 30px', fontSize: '13px' }}>Counter App </h1>
            <h2 style={{ margin: '20px 30px', fontSize: '13px' }}>{counter}</h2>
            <button onClick={handleAdd} style={{ marginLeft: '20px', fontSize: '13px', padding: '10px 30px' }}>
                {' '}
                more
            </button>
            <button onClick={handleReset} style={{ marginLeft: '20px', fontSize: '13px', padding: '10px 30px' }}>
                {' '}
                reset
            </button>
            <button onClick={handleSubstract} style={{ marginLeft: '20px', fontSize: '13px', padding: '10px 30px' }}>
                {' '}
                Less
            </button>
        </>
    );
};

export default CounterApp;
