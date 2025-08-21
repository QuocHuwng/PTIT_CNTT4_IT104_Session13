import React, { Component } from 'react';

type LoginState = {
    email: string;
    password: string;
    message: string;
};

class LoginForm extends Component<{}, LoginState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ message: 'Vui lòng nhập đầy đủ Email và Mật khẩu.' });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const isValidUser = users.some(
            (user: any) => user.email === email && user.password === password
        );

        if (isValidUser) {
            this.setState({ message: 'Đăng nhập thành công' });
        } else {
            this.setState({ message: 'Đăng nhập thất bại' });
        }
    };

    render() {
        const { email, password, message } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Đăng nhập tài khoản</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={this.handleChange}
                />

                <button type="submit">Đăng nhập</button>

                {message && <p>{message}</p>}
            </form>
        );
    }
}

export default LoginForm;