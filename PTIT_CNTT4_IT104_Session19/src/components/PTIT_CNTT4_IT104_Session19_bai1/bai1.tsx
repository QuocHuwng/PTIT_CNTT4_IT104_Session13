import React, { useMemo } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const cartItems: CartItem[] = [
    { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
    { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 },
    { id: 3, name: 'Sản phẩm C', price: 150000, quantity: 3 },
];

export default function bai1() {
    const totalPrice = useMemo(() => {
        console.log('Tính lại tổng đơn hàng...');
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <div>
            <h2>Giỏ hàng</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span> -
                        <span>{item.price.toLocaleString()} x {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <h3>Tổng đơn hàng: {totalPrice.toLocaleString()} VND</h3>
        </div>
    );
}
