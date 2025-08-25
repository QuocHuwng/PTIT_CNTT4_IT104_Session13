import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductItemProps {
    product: Product;
    addToCart: (product: Product) => void;
}

class ProductItem extends React.Component<ProductItemProps> {
    render() {
        const { product, addToCart } = this.props;
        return (
            <div className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString('vi-VN')} đ</p>
                <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
            </div>
        );
    }
}

export default ProductItem;