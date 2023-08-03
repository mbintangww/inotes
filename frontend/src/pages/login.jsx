import React, { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label >Password</label>
                    <input
                        type="password"

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login