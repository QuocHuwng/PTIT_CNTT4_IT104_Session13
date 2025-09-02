import React, { useState } from 'react';

export default function Bai1() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Kiểm tra độ dài chuỗi</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Nhập chuỗi tại đây"
            />
            {inputValue.length > 5 && (
                <p>
                    Chuỗi nhập vào dài hơn 5 ký tự!
                </p>
            )}
        </div>
    );
}
