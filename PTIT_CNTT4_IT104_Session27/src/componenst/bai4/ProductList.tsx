import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "./Product";

export default function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialKeyword = searchParams.get("search") || "";
    const [keyword, setKeyword] = useState(initialKeyword);

    useEffect(() => {
        setKeyword(initialKeyword);
    }, [initialKeyword]);

    const handleSearch = () => {
        setSearchParams({ search: keyword });
    };

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Nhập từ khóa..."
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Giá: {product.price.toLocaleString()} VND</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
