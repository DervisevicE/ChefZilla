import React from "react";
import logo from '../../assets/icon.png'

const Navbar = () => {
    return (
        <div className="navbar flex flex-col sticky top-0 p-[2rem] h-screen border-r-2">

            <div className="logoDiv flex pb-4 border-b-2 ">
                <img src={logo} alt="icon" className="w-10 h-10" />
                <h1 className="logo text-[28px]">Chef<strong>Zilla</strong></h1>
            </div>

            <div className="menu flex flex-col gap-2 mt-8 mb-4 border-b-2 border-whiteColor pb-8">
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="">Inspiration</a></li>
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="#">Recepies</a></li>
                <li className="menuList text-[16px] hover:text-darkerRedColor"><a href="">Meals</a></li>
            </div>


            <div className="flex flex-col gap-2 mt-12 ">
                <button className="rounded-full border border-darkerRedColor px-8 py-2.5 hover:bg-darkerRedColor hover:text-white">Log in</button>
                <button className="rounded-full bg-darkerRedColor px-8 py-2.5 text-white">Sign up</button>
            </div>

        </div>
    )
}

export default Navbar
