import React, { useEffect, useState } from 'react'

export default function Bai4() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (userName) {
      document.title = `Xin chào ${userName}`;   
    } else {
      document.title = 'he he he';
    }
  }, [userName]);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h2>Chào mừng đến với trang của chúng tôi</h2>
      <input
        type="text"
        placeholder="Nhập tiêu đề trang"
        value={userName}
        onChange={handleChange}
      />
    </div>
  );
}