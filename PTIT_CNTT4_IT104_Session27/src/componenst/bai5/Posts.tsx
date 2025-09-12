import { Link } from "react-router-dom";
import { posts } from "./BlogData";

export default function Posts() {
    return (
        <div>
            <h1>Danh sách bài viết</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
                        <p>{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
