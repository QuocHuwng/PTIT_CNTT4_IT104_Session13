import React, { useReducer } from 'react';

// Reducer để xử lý cập nhật trạng thái form
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET':
            return {
                name: '',
                email: ''
            };
        default:
            return state;
    }
};

export default function UserForm() {
    const [formState, dispatch] = useReducer(formReducer, {
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h2>User Information Form</h2>
            <form>
                <label>
                    Tên:
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </form>

            <div style={{ marginTop: '20px' }}>
                <h3>Thông tin người dùng:</h3>
                <p>Tên: {formState.name || '(Chưa nhập)'}</p>
                <p>Email: {formState.email || '(Chưa nhập)'}</p>
            </div>
        </div>
    );
}
