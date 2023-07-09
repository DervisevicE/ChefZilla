import React from "react";
import logo from '../../assets/icon.png'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {

    const {user} = useAuthContext()
    const {logout} = useLogout()

    const handleLogoutClick = () => {
        logout()
    }
    
    return (
        <div className="navbar flex flex-col sticky top-0 p-[2rem] h-screen border-r-2">

            <Link className="" to='/'>
                <div className="logoDiv flex pb-4 border-b-2 ">
                    <img src={logo} alt="icon" className="w-10 h-10" />
                    <h1 className="logo text-[28px]">Chef<strong>Zilla</strong></h1>
                </div>
            </Link>

            <div className="menu flex flex-col gap-2 mt-8 mb-4 border-b-2 border-whiteColor pb-8">
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="">Inspiration</a></li>
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="#">Recepies</a></li>
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="">Meals</a></li>
            </div>

            {!user ?
            <div className="flex flex-col gap-2 mt-12 ">
            <Link className="rounded-full border text-center border-darkerRedColor px-8 py-2.5 hover:bg-darkerRedColor hover:text-white" to="/login"><button >Log in</button></Link>
            <Link className="rounded-full text-center bg-darkerRedColor px-8 py-2.5 text-white" to="/signup"><button>Sign up</button></Link>
        </div> : <div className="flex flex-col gap-2 mt-12 ">
                <button className="rounded-full border text-center border-darkerRedColor px-8 py-2.5 hover:bg-darkerRedColor hover:text-white" onClick={handleLogoutClick} >Log out</button>
            </div>}

        </div>
    )
}

export default Navbar
