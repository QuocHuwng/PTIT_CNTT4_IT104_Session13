import React, { Component, createRef } from 'react';

type RegisterState = {
    studentName: string;
    email: string;
    password: string;
    address: string;
    message: string;
};

class RegisterForm extends Component<{}, RegisterState> {
    nameInputRef = createRef<HTMLInputElement>();

    constructor(props: {}) {
        super(props);
        this.state = {
            studentName: '',
            email: '',
            password: '',
            address: '',
            message: ''
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<RegisterState, keyof RegisterState>);
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { studentName, email, password, address } = this.state;

        if (!studentName || !email || !password) {
            this.setState({ message: 'Vui lòng điền đầy đủ thông tin bắt buộc.' });
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const isDuplicateEmail = existingUsers.some((user: any) => user.email === email);

        if (isDuplicateEmail) {
            this.setState({ message: 'Email đã tồn tại. Vui lòng dùng email khác.' });
            return;
        }

        const newUser = { studentName, email, password, address };
        localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

        this.setState({
            studentName: '',
            email: '',
            password: '',
            address: '',
            message: 'Đăng ký tài khoản thành công'
        });

        this.nameInputRef.current?.focus();
    };

    render() {
        const { studentName, email, password, address, message } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Đăng ký tài khoản</h2>

                <input
                    ref={this.nameInputRef}
                    type="text"
                    name="studentName"
                    placeholder="Tên sinh viên"
                    value={studentName}
                    onChange={this.handleChange}
                />

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

                <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={this.handleChange}
                />

                <button type="submit">Đăng ký</button>

                {message && <p>{message}</p>}
            </form>
        );
    }
}

export default RegisterForm;