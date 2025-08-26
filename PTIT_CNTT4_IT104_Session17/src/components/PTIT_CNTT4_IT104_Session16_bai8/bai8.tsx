import React, { useState } from "react";

export default function Bai8() {
    const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelected(prev =>
            checked ? [...prev, value] : prev.filter(hobby => hobby !== value)
        );
    };

    return (
        <div>
            <p>Sở thích: {JSON.stringify(selected)}</p>
            {options.map(hobby => (
                <label key={hobby} style={{ display: "block" }}>
                    <input
                        type="checkbox"
                        value={hobby}
                        checked={selected.includes(hobby)}
                        onChange={handleChange}
                    />{" "}
                    {hobby}
                </label>
            ))}
        </div>
    );
}
