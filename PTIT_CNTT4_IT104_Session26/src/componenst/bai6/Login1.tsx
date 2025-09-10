import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login1() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
        role: '',
    });

    const [error, setError] = useState('');

    const user = {
        email: 'admin@example.com',
        password: '123456',
        role: 'Admin',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        if (
            form.email === user.email &&
            form.password === user.password &&
            form.role === user.role
        ) {
            if (form.role === 'Admin') {
                navigate('/account');
            } else if (form.role === 'User') {
                navigate('/user');
            }
        } else {
            setError('Thông tin đăng nhập không đúng');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <input
                name="email"
                type="email"
                placeholder="Nhập email"
                value={form.email}
                onChange={handleChange}
            />
            <br />
            <input
                name="password"
                type="password"
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={handleChange}
            />
            <br />
            <select name="role" value={form.role} onChange={handleChange}>
                <option value="">-- Chọn quyền --</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <br />
            <button onClick={handleLogin}>Đăng nhập</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login1;
