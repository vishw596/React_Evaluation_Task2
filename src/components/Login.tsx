import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("user") ? true : false;
    if (isAuthenticated) {
        return <Navigate to={"/dashboard"} />;
    }
    return (
        <>
            <div>
                <h1>Login</h1>
                <div>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={() => {
                        localStorage.setItem("user", JSON.stringify({ email, password }));
                        navigate("/dashboard", { replace: true });
                    }}>
                    Login
                </button>
            </div>
        </>
    );
}
