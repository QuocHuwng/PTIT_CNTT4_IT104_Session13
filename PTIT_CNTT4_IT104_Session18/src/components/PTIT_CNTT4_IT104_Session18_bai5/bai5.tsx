import React, { useReducer } from 'react';

const reducer = (state: string, action: { type: 'CHANGE_INPUT'; payload: string }) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return action.payload;
        default:
            return state;
    }
};

const InputText = () => {
    const [inputValue, dispatch] = useReducer(reducer, '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE_INPUT', payload: e.target.value });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Input change</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={{ padding: '10px', fontSize: '16px', width: '300px' }}
            />
            <p style={{ marginTop: '20px' }}>
                <strong>{inputValue}</strong>
            </p>
        </div>
    );
};

export default InputText;
