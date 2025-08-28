import { useEffect, useState } from 'react';

const quotes: string[] = [
    'Học, học nữa, học mãi.',
    'Thất bại là mẹ thành công.',
    'Không gì là không thể.',
    'Kiên trì sẽ làm được.',
    'Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.'
];

export default function bai5() {
    const [quote, setQuote] = useState<string>('');

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    useEffect(() => {
        randomQuote();
    }, []);

    return (
        <div>
            <p>Truyện cảm hứng</p>
            <p>{quote}</p>
            <button onClick={randomQuote}>lấy câu hỏi mới</button>
        </div>
    );
}