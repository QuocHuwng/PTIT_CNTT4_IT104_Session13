import React from "react";

const Calculation: React.FC = () => {
    const a = 10;
    const b = 10;

    const add = (x: number, y: number): number => x + y;
    const sub = (x: number, y: number): number => x - y;
    const mul = (x: number, y: number): number => x * y;
    const div = (x: number, y: number): number => x / y;

    return (
        <div>
            <h2><b>Danh sách kết quả</b></h2>
            <ul>
                <li>{a} + {b} = {add(a, b)}</li>
                <li>{a} - {b} = {sub(a, b)}</li>
                <li>{a} * {b} = {mul(a, b)}</li>
                <li>{a} / {b} = {div(a, b)}</li>
            </ul>
        </div>
    );
};

export default Calculation;
