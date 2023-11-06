import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


const NavBar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href="" className="button button-ghost font-bold text-center text-4xl text-[#Fcb0b3]">I<span className="text-[#40E5AE]">notes</span></a>
                </div>
                <div className="flex-none gap-2">
                    {user && <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>}
                    <div className="dropdown dropdown-end">
                        {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="" />
                            </div>
                        </label>}
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {user && <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>}
                            {user ? (<li><a onClick={handleClick}>Logout</a></li>) : (<>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/signup">Signup</a></li></>)}


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar