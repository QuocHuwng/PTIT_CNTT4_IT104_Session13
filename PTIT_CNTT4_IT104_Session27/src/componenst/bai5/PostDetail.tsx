import { useParams } from "react-router-dom";
import { posts } from "./BlogData";

export default function PostDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) return <div>Không tìm thấy bài viết</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
