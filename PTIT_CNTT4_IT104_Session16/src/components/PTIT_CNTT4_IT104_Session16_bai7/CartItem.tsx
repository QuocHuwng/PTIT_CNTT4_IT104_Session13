import React from 'react';
import { CartItem as CartItemType } from './ShoppingCart';

interface CartItemProps {
    item: CartItemType;
    remove: (id: number) => void;
    update: (id: number, delta: number) => void;
}

class CartItem extends React.Component<CartItemProps> {
    render() {
        const { item, remove, update } = this.props;
        return (
            <div className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                <span>{item.product.name}</span>
                <div className="quantity-controls">
                    <button onClick={() => update(item.product.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => update(item.product.id, 1)}>+</button>
                </div>
                <button onClick={() => remove(item.product.id)}>🗑️</button>
            </div>
        );
    }
}

export default CartItem;