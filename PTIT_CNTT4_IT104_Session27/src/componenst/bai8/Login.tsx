import { useState } from "react";
import { Link } from "react-router-dom";

interface IUser {
    email: string;
    password: string;
}

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleLogin = () => {
        const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            setError("Sai email hoặc mật khẩu.");
        } else {
            setError("");
            alert("Đăng nhập thành công!");
        }
    };

    return (
        <div>
            <h1>Login account</h1>
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
            <button onClick={handleLogin}>Login an account</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}
