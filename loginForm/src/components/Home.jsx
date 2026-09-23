import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <>
            <div>This is Home Page</div>
            <button onClick={handleLogin} >Login</button>
        </>

    )
}

export default Home