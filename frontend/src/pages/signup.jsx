import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(email, password);
        } catch (error) {
            console.error('Terjadi kesalahan saat signup:', error);
        }

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
                <button disabled={isLoading}>Sign Up</button>
                {error && <div >{error}</div>}
            </form>
        </div>
    )
}
export default Signup