import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface IUser {
    email: string;
    password: string;
}

export default function Register() {
    const [email, setEmail] = useState < string > ("");
    const [password, setPassword] = useState < string > ("");
    const [confirm, setConfirm] = useState < string > ("");
    const [error, setError] = useState < string > ("");
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!email || !password || !confirm) {
            setError("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        if (password !== confirm) {
            setError("Mật khẩu không khớp.");
            return;
        }

        const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
        const isDuplicate = users.some((user) => user.email === email);

        if (isDuplicate) {
            setError("Email đã tồn tại.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/login");
    };

    return (
        <div>
            <h1>Create account</h1>
            <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Create an account</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}
