import React from 'react';

type Product = {
    id: number;
    name: string;
    price: string;
    quantity: number;
};

type Props = {
    product: Product;
};

const ChildComponent: React.FC<Props> = ({ product }) => {
    return (
        <div>
            <h2>Dữ liệu trong component con</h2>
            <p>Id: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
};

export default ChildComponent;
