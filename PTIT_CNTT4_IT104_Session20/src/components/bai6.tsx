import React, { useState, useRef, useEffect } from 'react';

export default function Bai6() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <h2>Ứng dụng React với Modal và Focus Input</h2>
            <button onClick={openModal}>Mở Modal</button>

            {isOpen && (
                <div>
                    <h3>Đăng nhập</h3>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Nhập tên người dùng"
                    />
                    <br /><br />
                    <button onClick={closeModal}>Đóng</button>
                </div>
            )}
        </div>
    );
}