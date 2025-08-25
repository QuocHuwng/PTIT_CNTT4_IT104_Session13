import React from 'react';

interface HeaderProps {
    cartCount: number;
    toggleCart: () => void;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <header className="header">
                <nav>
                    <a href="#">Trang chủ</a>
                    <a href="#">Danh sách sản phẩm</a>
                    <div className="cart-icon" onClick={this.props.toggleCart}>
                        🛒
                        {this.props.cartCount > 0 && <span className="cart-badge">{this.props.cartCount}</span>}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;