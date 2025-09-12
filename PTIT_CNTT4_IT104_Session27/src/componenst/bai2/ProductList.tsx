import { Link } from 'react-router-dom';
import { products } from './products';

function ProductList() {
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Giá: {product.price.toLocaleString()} VND</p>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;