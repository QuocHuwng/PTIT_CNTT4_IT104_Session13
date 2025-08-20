import React from 'react';

class Todolist extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    name: 'Thiết kế giao diện Header',
                    assign: 'Nguyễn Văn A',
                    status: false,
                    created_at: new Date('2024-03-21T13:12:12')
                },
                {
                    id: 2,
                    name: 'Thiết kế giao diện Footer',
                    assign: 'Nguyễn Văn B',
                    status: true,
                    created_at: new Date('2024-03-21T15:10:50')
                }
            ]
        };
    }

    formatDate(date: { getDate: () => any; getMonth: () => number; getFullYear: () => any; getHours: () => any; getMinutes: () => any; getSeconds: () => any; }) {
        const pad = (n: string | number) => (n < 10 ? '0' + n : n);
        return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    }

    renderStatus(status: any) {
        return (
            <span style={{ color: status ? 'green' : 'red', fontWeight: 'bold' }}>
                {status ? 'Hoàn thành' : 'Chưa hoàn thành'}
            </span>
        );
    }

    render() {
        return (
            <div>
                <h2>Danh sách công việc</h2>
                <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Người thực hiện</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((task: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; assign: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; status: any; created_at: { getDate: () => any; getMonth: () => number; getFullYear: () => any; getHours: () => any; getMinutes: () => any; getSeconds: () => any; }; }, index: number) => (
                            <tr key={task.id}>
                                <td>{index + 1}</td>
                                <td>{task.name}</td>
                                <td>{task.assign}</td>
                                <td>{this.renderStatus(task.status)}</td>
                                <td>{this.formatDate(task.created_at)}</td>
                                <td>
                                    <button>Sửa</button>
                                    <button style={{ marginLeft: '5px', color: 'red' }}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Todolist;