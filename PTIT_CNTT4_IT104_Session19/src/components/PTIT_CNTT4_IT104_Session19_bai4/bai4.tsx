import React, { useState, useEffect } from 'react';

export default function bai4() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (name.trim() === '') {
            setNameError('Trường này là bắt buộc');
        } else {
            setNameError('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            setEmailError('Trường này là bắt buộc');
        } else if (!emailRegex.test(email)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }

        setIsValid(
            name.trim() !== '' &&
            email.trim() !== '' &&
            emailRegex.test(email)
        );
    }, [name, email]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            alert('Gửi thành công!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Đăng ký thông tin</h2>

            <div>
                <label>Họ tên:</label>
                <input
                    type="text"
                    placeholder="Nhập họ tên..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>

            <button type="submit" disabled={!isValid}>
                Gửi
            </button>
        </form>
    );
}
