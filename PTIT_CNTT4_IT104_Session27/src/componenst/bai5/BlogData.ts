export interface IPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
}

export const posts: IPost[] = [
    {
        id: 1,
        title: "Bắt đầu với React",
        excerpt: "Giới thiệu về React và cách bắt đầu dự án...",
        content:
            "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Với React, bạn có thể tạo các component tái sử dụng, dễ bảo trì và dễ kiểm thử. Bài viết này sẽ giúp bạn hiểu cách hoạt động của React và cách bắt đầu với nó.",
    },
    {
        id: 2,
        title: "Sử dụng TailwindCSS",
        excerpt: "Hướng dẫn tích hợp CSS nhanh và tiện lợi...",
        content:
            "TailwindCSS là một framework CSS tiện lợi giúp bạn xây dựng giao diện nhanh chóng. Bạn không cần viết CSS thủ công mà chỉ cần sử dụng các class có sẵn. Bài viết này sẽ hướng dẫn cách tích hợp Tailwind vào dự án React.",
    },
    {
        id: 3,
        title: "Giới thiệu về React Router",
        excerpt: "Điều hướng trong React với React Router...",
        content:
            "React Router là thư viện giúp bạn xây dựng các ứng dụng SPA có nhiều trang. Bạn có thể định nghĩa các route, sử dụng Link để điều hướng và quản lý URL một cách linh hoạt. Bài viết này sẽ giới thiệu các khái niệm cơ bản.",
    },
    {
        id: 4,
        title: "Quản lý state với Redux",
        excerpt: "Hướng dẫn sử dụng Redux để quản lý state...",
        content:
            "Redux là một thư viện quản lý state phổ biến trong các ứng dụng React. Nó giúp bạn lưu trữ và cập nhật dữ liệu một cách rõ ràng và có thể kiểm soát. Bài viết này sẽ hướng dẫn cách sử dụng Redux cơ bản.",
    },
    {
        id: 5,
        title: "Hooks trong React",
        excerpt: "useState, useEffect và các hook phổ biến...",
        content:
            "Hooks là tính năng mạnh mẽ trong React giúp bạn sử dụng state và lifecycle mà không cần class. Các hook như useState, useEffect, useContext giúp mã ngắn gọn và dễ hiểu hơn. Bài viết này sẽ giới thiệu các hook phổ biến.",
    },
];
