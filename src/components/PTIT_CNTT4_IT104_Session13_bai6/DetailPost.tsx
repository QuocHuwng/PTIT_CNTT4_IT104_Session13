import React from 'react';

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
};

type Props = {
    post: Post;
};

function DetailPost(props: Props) {
    const { id, title, content, author } = props.post;

    return (
        <div style={{ marginBottom: '20px' }}>
            <p><strong>Id:</strong> {id}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Content:</strong> {content}</p>
            <p><strong>Author:</strong> {author}</p>
            <hr />
        </div>
    );
}

export default DetailPost;