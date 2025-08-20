import React from "react";

interface UserRowProps {
    index: number;
    name: string;
    dob: string;
    gender: string;
    address: string;
}

const UserRow: React.FC<UserRowProps> = ({ index, name, dob, gender, address }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{dob}</td>
            <td>{gender}</td>
            <td>{address}</td>
            <td>
                <button className="action-btn">Sửa</button>
                <button className="delete-btn">Xóa</button>
            </td>
        </tr>
    );
};

export default UserRow;
