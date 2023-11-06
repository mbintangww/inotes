import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()



    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }


    return (
        <>
            <div className="font-sans min-h-screen antialiased bg-slate-100 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-[#fcb0b3]">I<span className="text-[#40E5AE]">notes</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                            <h1 className="font-bold text-xl text-center text-[#40E5AE]">Log In to your account</h1>
                            <div className="flex flex-col space-y-1">
                                <label className='text-[#40E5AE]' >Email</label>
                                <input
                                    className='border border-[#40E5AE] active:border-[#2A9D81] rounded-md px-2 py-1 focus:outline-none focus:ring-[#40E5AE] focus:border-[#40E5AE]'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className='text-[#40E5AE] '  >Password</label>
                                <input
                                    className='border border-[#40E5AE] active:border-[#2A9D81] rounded-md px-2 py-1 focus:outline-none focus:ring-[#40E5AE] focus:border-[#40E5AE]'
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col justify-center items-center ">


                                <button type="submit" className="bg-[#40E5AE] text-white font-bold px-5 py-2 mb-3 rounded focus:outline-none shadow hover:bg-[#2A9D81] transition-colors" disabled={isLoading}>Log In</button>
                                <Link to="/signup" className="justify-self text-[#40E5AE] hover:text-[#2A9D81] hover:underline">Create account</Link>
                                {error && <div class="bg-red-100 text-red-700 p-2 mt-2 rounded"> {error}</div>}
                            </div>

                        </div>
                    </form>
                    <div className="flex justify-center text-gray-500 text-sm">
                        <p>&copy;2023. Bintang. All right reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

