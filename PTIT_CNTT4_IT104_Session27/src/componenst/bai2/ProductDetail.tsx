import { useParams } from 'react-router-dom';
import { products } from './products';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return <h2>Sản phẩm không tồn tại.</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img
                alt={product.name}
            />
            <p>Giá: {product.price.toLocaleString()} VND</p>
            <p>{product.description}</p>
            <p>
                Đây là sản phẩm chất lượng cao, phù hợp với nhu cầu sử dụng hàng ngày.
            </p>
        </div>
    );
}

export default ProductDetail;