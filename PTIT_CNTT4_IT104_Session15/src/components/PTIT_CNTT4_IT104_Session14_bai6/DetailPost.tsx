import React from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

interface Props {
    post: Post;
}

const DetailPost = ({ post }: Props) => {
    return (
        <div style={{ marginBottom: '16px' }}>
            <h3>{post.title}</h3>
            <p><strong>Content:</strong> {post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
};

export default DetailPost;
