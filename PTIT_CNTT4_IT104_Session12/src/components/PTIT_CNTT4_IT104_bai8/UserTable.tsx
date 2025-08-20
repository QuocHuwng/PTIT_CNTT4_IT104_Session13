import React from "react";
import UserRow from "./UserRow";
import "./UserTable.css";

const UserTable: React.FC = () => {
    const users = [
        { name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New York" },
        { name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <UserRow
                        key={index}
                        index={index + 1}
                        name={user.name}
                        dob={user.dob}
                        gender={user.gender}
                        address={user.address}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
