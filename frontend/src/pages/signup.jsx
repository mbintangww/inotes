import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()



    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)

    }


    return (
        <>
            <div className="font-sans min-h-screen antialiased bg-slate-100 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-green-500">I<span className="text-pink-500">notes</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                            <h1 className="font-bold text-xl text-center">Sign in to your account</h1>
                            <div className="flex flex-col space-y-1">
                                <label >Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label >Password</label>
                                <input
                                    type="password"

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                                <a href="#" className="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a>
                                <button type="submit" className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors" disabled={isLoading}>Sign Up</button>

                            </div>
                            {error && <div> {error}</div>}
                        </div>
                    </form>
                    <div className="flex justify-center text-gray-500 text-sm">
                        <p>&copy;2021. All right reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup