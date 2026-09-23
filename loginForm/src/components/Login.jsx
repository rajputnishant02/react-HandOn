import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showpassword, setShowpassword] = useState(false)

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/profile", {
            state:
                { username: username }
        })
    }

    return (
        <>
            <div>Enter Your Login Details</div>
            <div>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type={showpassword ? "text" : "password"}
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <input type="checkbox" checked={showpassword} onChange={() => setShowpassword(!showpassword)} />
                <button onClick={handleLogin} >Login</button>
            </div>
        </>
    )
}

export default Login