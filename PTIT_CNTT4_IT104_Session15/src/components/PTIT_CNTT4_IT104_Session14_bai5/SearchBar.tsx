import React from 'react';

function SearchBar() {
    return (
        <input
            type="text"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
            style={{ width: '300px', marginBottom: '10px' }}
        />
    );
}

export default SearchBar;
