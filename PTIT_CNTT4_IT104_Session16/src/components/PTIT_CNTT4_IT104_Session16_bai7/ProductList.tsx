import React from 'react';
import ProductItem from './ProductItem';
import { Product } from './ShoppingCart'; 

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

class ProductList extends React.Component<ProductListProps> {
    render() {
        return (
            <div className="product-grid">
                {this.props.products.map((product) => (
                    <ProductItem key={product.id} product={product} addToCart={this.props.addToCart} />
                ))}
            </div>
        );
    }
}

export default ProductList;