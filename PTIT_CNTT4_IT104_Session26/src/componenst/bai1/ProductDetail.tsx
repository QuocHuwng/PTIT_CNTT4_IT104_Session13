import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <p>ID: {id}</p>
        </div>
    );
}

export default ProductDetail;