import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../style/Form.css";
// import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { first_name,last_name,username, password,email });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem('loggedInUser', username);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage('This username and password already exist.');
            } else {
                console.log(error)
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {method === "register" && (
            <>
                <input
                className="form-input"
                type="first_name"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="firstname"
            />
                <input
                    className="form-input"
                    type="last_name"
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="lastname"
                />
                <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            </>
            )}
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            
            <button className="form-button" type="submit">
                {name}
            </button>
            {method === "register" && (
                <div className="link">
                    <p>Already have an account?</p>
                    <button
                        className="form-button"
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>
            )}
            {method === "login" && (
                <div className="link">
                    <p>Create Your Account</p>
                    <button
                        className="form-button"
                        type="button"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </div>
            )}
        </form>
    );
}

export default Form;
