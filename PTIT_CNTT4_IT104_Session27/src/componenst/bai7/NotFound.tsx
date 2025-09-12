import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Trang bạn tìm không tồn tại.</h1>
            <p>Có thể đường dẫn bạn nhập bị sai hoặc trang đã được di chuyển.</p>
            <button onClick={() => navigate("/")}>Quay về trang chủ</button>
            <button onClick={() => navigate(-1)}>Quay lại</button>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
                Nếu bạn nghĩ đây là lỗi của HCMUT, hãy liên hệ quản trị viên.
            </p>
        </div>
    );
}
