import React, { useState, useEffect } from 'react';

export default function bai6() {
    const [keyPressed, setKeyPressed] = useState<string>('');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setKeyPressed(event.key.toUpperCase()); 
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            {keyPressed ? `[ ${keyPressed} ]` : 'Nhấn phím bất kỳ'}
        </div>
    );
}
