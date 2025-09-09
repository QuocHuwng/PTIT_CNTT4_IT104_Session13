import { useParams } from 'react-router-dom';

const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
];

function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === Number(id));

    if (!user) {
        return <h2>Không tìm thấy người dùng</h2>;
    }

    return (
        <div>
            <h2>Thông tin chi tiết người dùng</h2>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>UserName:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
        </div>
    );
}

export default UserDetail;
