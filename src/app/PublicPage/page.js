"use client";


import React, {useEffect, useState} from 'react';
import useAuth from "@/app/utils/useAuth";

const Page = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {handleLogin, handleRegister} = useAuth()

    function Show(e) {
        e.preventDefault();
        setShowRegister(() => !showRegister)
    }



    return (
        <div className="h-[100vh] flex justify-center items-center bg-[url('/images/background.jpg')] ">
            <div className="p-4 border border-white backdrop-blur-sm h-[45vh] flex justify-center items-center rounded-2xl">
                {showRegister === true ? (
                    <form
                        className="w-[300px] flex flex-col justify-center items-center gap-2 text-white"
                        action="" onSubmit={(e)=>{
                            e.preventDefault();
                        handleRegister({username, email, password})
                    }}>
                        <h1>Register</h1>
                        <input className='border-2  border-white bg-transparent placeholder:text-white' type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        <input className='border-2  border-white bg-transparent placeholder:text-white' type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input className='border-2  border-white bg-transparent placeholder:text-white' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button type={"submit"}>Register</button>
                        <button type={"button"} onClick={Show}>Already have an account?</button>
                    </form>
                ) : (
                    <form
                        className="w-[300px] flex flex-col justify-center items-center gap-4 text-white"

                        onSubmit={(e)=>{
                            e.preventDefault();
                            handleLogin({email, password});
                    }}>
                        <h1>Login</h1>
                        <input className='border-2  border-white bg-transparent placeholder:text-white' type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input className='border-2  border-white bg-transparent placeholder:text-white' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button type="submit">Login</button>
                        <button type="button" onClick={(e)=>{Show(e)}}>Don't have an account?</button>
                    </form>
                )}


            </div>
        </div>
    );
};

export default Page;