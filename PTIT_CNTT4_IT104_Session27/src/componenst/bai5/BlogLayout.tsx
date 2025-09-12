import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <aside style={{ width: "200px", background: "#a78bfa", padding: "1rem" }}>
                <h2>My Blog</h2>
                <nav>
                    <Link to="/blog/posts">Posts</Link>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: "1rem" }}>
                <Outlet />
            </main>
        </div>
    );
}
