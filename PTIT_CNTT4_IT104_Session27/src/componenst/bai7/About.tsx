import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Trang giới thiệu.</p>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    );
}
