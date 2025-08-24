import React, { useState } from 'react';
import DetailPost from './DetailPost';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

const ListPost = () => {
    const [posts] = useState<Post[]>([
        {
            id: 1,
            title: 'Học ReactJS',
            content: 'Học ReactJS để đi làm',
            author: 'David'
        },
        {
            id: 2,
            title: 'Props trong ReactJS',
            content: 'Props giúp truyền dữ liệu từ component con xuống component cha',
            author: 'Linda'
        },
        {
            id: 3,
            title: 'State trong ReactJS',
            content: 'State giúp quản lý trạng thái của dữ liệu bên trong một component',
            author: 'David'
        }
    ]);

    return (
        <div>
            <h2>Danh sách bài viết</h2>
            {posts.map((post) => (
                <DetailPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default ListPost;
