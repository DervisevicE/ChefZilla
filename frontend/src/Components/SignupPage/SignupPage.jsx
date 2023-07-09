import React, { useState } from "react";
import { useSignup } from '../../hooks/useSignup'
import FileBase from 'react-file-base64'

const SignupPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const { signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, email, password, profilePicture)

    };
    return (

        <div className="flex-grow  mt-28 flex justify-center">
            <div className="max-w-md h-[80%] w-full p-6 bg-white shadow-md">

                <h2 className="text-2xl font-semibold my-6">Sign up</h2>
                <form onSubmit={handleSubmit}>



                    <label class="block">
                        <span class="sr-only">Choose profile photo</span>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setProfilePicture(base64)} />
                    </label>


                    <div className="mb-4">
                        <label htmlFor="text" className="block font-medium mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-redColor"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-redColor"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-redColor"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="bg-darkerRedColor text-white py-2 px-4 rounded-full hover:bg-darkerRedColor focus:outline-none"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignupPage