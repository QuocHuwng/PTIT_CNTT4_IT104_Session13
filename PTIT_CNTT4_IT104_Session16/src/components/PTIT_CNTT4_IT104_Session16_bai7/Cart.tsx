import React from 'react';
import CartItem from './CartItem';
import { CartItem as CartItemType } from './ShoppingCart'; 

interface CartProps {
    cart: CartItemType[];
    total: number;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, delta: number) => void;
}

class Cart extends React.Component<CartProps> {
    render() {
        const { cart, total, removeFromCart, updateQuantity } = this.props;

        return (
            <div className="cart-dropdown">
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Giỏ hàng trống</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                remove={removeFromCart}
                                update={updateQuantity}
                            />
                        ))}
                        <p>Tổng tiền: {total.toLocaleString('vi-VN')} đ</p>
                    </>
                )}
            </div>
        );
    }
}

export default Cart;