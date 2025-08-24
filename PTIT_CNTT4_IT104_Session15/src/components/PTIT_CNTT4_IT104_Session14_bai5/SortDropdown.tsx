import React from 'react';

function SortDropdown() {
    return (
        <select>
            <option value="">Sắp xếp theo tuổi</option>
            <option value="asc">Tăng dần</option>
            <option value="desc">Giảm dần</option>
        </select>
    );
}

export default SortDropdown;
