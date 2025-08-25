import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import './ShoppingCart.css'; // Tùy chọn: tạo file CSS riêng

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface ShoppingCartState {
    cart: CartItem[];
    showCart: boolean;
}

class ShoppingCart extends React.Component<{}, ShoppingCartState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cart: [],
            showCart: false,
        };
    }

    addToCart = (product: Product) => {
        this.setState((prevState) => {
            const existing = prevState.cart.find((item) => item.product.id === product.id);
            if (existing) {
                existing.quantity += 1;
                return { cart: [...prevState.cart] };
            }
            return { cart: [...prevState.cart, { product, quantity: 1 }] };
        });
    };

    removeFromCart = (id: number) => {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((item) => item.product.id !== id),
        }));
    };

    updateQuantity = (id: number, delta: number) => {
        this.setState((prevState) => {
            const cart = [...prevState.cart];
            const item = cart.find((item) => item.product.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    return { cart: cart.filter((i) => i.product.id !== id) };
                }
            }
            return { cart };
        });
    };

    toggleCart = () => {
        this.setState((prevState) => ({ showCart: !prevState.showCart }));
    };

    render() {
        const products: Product[] = [
            { id: 1, name: 'Điện thoại Samsung Galaxy', price: 20000000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 2, name: 'Điện thoại iPhone14 Promax', price: 20500000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 3, name: 'Điện thoại Samsung Galaxy', price: 21000000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 4, name: 'Điện thoại iPhone11 Promax', price: 21500000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 5, name: 'Điện thoại Samsung Galaxy', price: 22000000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 6, name: 'Điện thoại Samsung Galaxy', price: 22500000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 7, name: 'Điện thoại Oppo A9', price: 23000000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
            { id: 8, name: 'Điện thoại Oppo V5', price: 23500000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDP6UhNSSjRjkvkrNdWgiSlmg2UGyJS-apW5o4Ip2125FnVrC_6E7cf_5g4FR6-58EFH2DmsgJi5tLpDUTzdFor2xItu3jEssH8ZAdlSuTikHKjwSCc8kvqcxpRHMkPIasImxG8TWtAA&usqp=CAc' },
        ];

        const { cart, showCart } = this.state;
        const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

        return (
            <div className="shopping-cart">
                <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} toggleCart={this.toggleCart} />
                <ProductList products={products} addToCart={this.addToCart} />
                {showCart && <Cart cart={cart} total={total} removeFromCart={this.removeFromCart} updateQuantity={this.updateQuantity} />}
            </div>
        );
    }
}

export default ShoppingCart;