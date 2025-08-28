import React, { useReducer, useState } from 'react';

type State = {
    loading: boolean;
    success: boolean;
    error: boolean;
};

type Action =
    | { type: 'LOGIN_START' }
    | { type: 'LOGIN_SUCCESS' }
    | { type: 'LOGIN_ERROR' };

const initialState: State = {
    loading: false,
    success: false,
    error: false,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOGIN_START':
            return { loading: true, success: false, error: false };
        case 'LOGIN_SUCCESS':
            return { loading: false, success: true, error: false };
        case 'LOGIN_ERROR':
            return { loading: false, success: false, error: true };
        default:
            return state;
    }
}

export default function bai8() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch({ type: 'LOGIN_START' });

        setTimeout(() => {
            if (username === 'admin' && password === '123456') {
                dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                dispatch({ type: 'LOGIN_ERROR' });
            }
        }, 1500);
    };

    return (
        <div>
            <h2>Đăng nhập</h2>

            <div>
                <label>Tên người dùng:</label>
                <input
                    type="text"
                    placeholder="Nhập tên..."
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label>Mật khẩu:</label>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleLogin} disabled={state.loading}>
                Đăng nhập
            </button>

            {state.loading && <p>Đang đăng nhập...</p>}
            {state.success && <p style={{ color: 'green' }}>Đăng nhập thành công!</p>}
            {state.error && <p style={{ color: 'red' }}>Đăng nhập thất bại!</p>}
        </div>
    );
}
