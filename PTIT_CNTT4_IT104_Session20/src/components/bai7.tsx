import React, { useReducer } from 'react';

const counter = (state: { count: number; }, action: { type: any; }) => {
    switch (action.type) {
        case 'tang':
            return { count: state.count + 1 };
        case 'giam':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default function bai7() {
    const [state, dispatch] = useReducer(counter, { count: 0 });

    return (
        <div>
            <h2>Số đếm: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'tang' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'giam' })}>Giảm</button>
        </div>
    );
}