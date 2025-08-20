import React from "react";
interface User {
    firstName: string;
    lastName: string;
}

function formatName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
}
export default function FormatName() {
    const user: User = {
        firstName: "Nguyễn Văn",
        lastName: "Nam"
    };

    return (
        <div>
            <p>
                <strong>Họ và tên:</strong> {formatName(user)}
            </p>
        </div>
    );
}
