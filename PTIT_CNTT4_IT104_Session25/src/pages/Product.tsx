import React from 'react'

export default function Product() {
    const data = [
        {
            id: 1,
            name: "Iphone16",
            price: 15000
        },
        {
            id: 2,
            name: "hihi",
            price: 1000
        },
        {
            id: 3,
            name: "ipad",
            price: 200
        }
    ];

    return (
        <div>
            trang san pham
            <h1>Danh sach san pham</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Ten san pham</th>
                        <th>Gia</th>
                        <th>Hanh dong</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: number) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button>Xem chi tiết</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
