import { Link } from 'react-router-dom';

const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
];

function ListUser() {
    return (
        <div>
            <h2>Danh sách người dùng</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <p><strong>Id:</strong> {user.id}</p>
                    <p><strong>UserName:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <Link to={`/user/${user.id}`}>
                        <button>Xem chi tiết</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListUser;
