import React, { useRef } from 'react';

export default function bai7() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <h2>Cuộn tới nội dung</h2>
            <button onClick={handleScroll}>Đi tới phần nội dung</button>

            {/* Nội dung giả lập phía trên */}
            <div>
                {[...Array(30)].map((_, i) => (
                    <p key={i}>Nội dung giả lập #{i + 1}</p>
                ))}
            </div>

            {/* Phần tử mục tiêu */}
            <div ref={sectionRef}>
                <h3>Đây là phần nội dung mục tiêu</h3>
                <p>Bạn đã cuộn tới đây thành công!</p>
            </div>
        </div>
    );
}
