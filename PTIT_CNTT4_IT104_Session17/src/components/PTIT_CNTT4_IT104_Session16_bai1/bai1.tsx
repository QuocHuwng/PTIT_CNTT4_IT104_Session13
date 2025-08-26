import React, { useState } from "react";

export default function bai1() {
    const [name] = useState("Nguyễn Văn A");

    return (
        <div>
            Kết quả đạt được: <strong>{name}</strong>
        </div>
    );
}
