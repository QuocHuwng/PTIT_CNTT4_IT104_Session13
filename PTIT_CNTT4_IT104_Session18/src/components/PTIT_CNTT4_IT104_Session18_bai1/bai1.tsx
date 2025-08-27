import React, { useReducer } from 'react';

const reducer = (state: number, action: { type: string }): number => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

function Increase() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increase
            </button>
        </div>
    );
}

export default Increase;
