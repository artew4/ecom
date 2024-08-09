import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Button({ route, method }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //const name = method === "login" ? "Login" : "Register";
    if (method == "login"){
        name = "Login"
    }
    if (method == "register"){
        name = "Register"
    }
    if (method == "logout"){
        name = "Logout"
    }

    const handleSubmit = async () => {
        setLoading(true);

        try {
            if (method === "login") {
                navigate("/login")
            }
            if (method === "register"){
                navigate("/register")
            }
            if (method === "logout"){
                navigate("*")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
}

export default Button