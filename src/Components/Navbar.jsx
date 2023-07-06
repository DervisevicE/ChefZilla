import React from "react";
import logo from '../assets/icon.png'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center p-[2rem]">

            <div className="logoDiv flex">
                <img src={logo} alt="icon" className="w-10 h-10" />
                <h1 className="logo text-[28px]">Chef<strong>Zilla</strong></h1>
            </div>


            <div className="flex gap-8">
                <button className="rounded-full border border-darkerRedColor px-8 py-2.5 hover:bg-darkerRedColor hover:text-white">Log in</button>
                <button className="rounded-full bg-darkerRedColor px-8 py-2.5 text-white">Sign up</button>
            </div>

        </div>
    )
}

export default Navbar
