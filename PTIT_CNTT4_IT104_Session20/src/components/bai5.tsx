import React, { useEffect, useState } from 'react'

export default function bai5() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearTimeout(intervalId);
            console.log('Time stop');
        }
    }, []);
  return (
    <div>
          <p>So giay da troi qua: {count}</p>
    </div>
  )
}
