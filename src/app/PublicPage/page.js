"use client";


import React, {useEffect, useState} from 'react';
import {privateRoutes} from "@/app/utils/routes";
import Link from "next/link";


const Page = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("Token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");

        if (username === storedUser.username && password === storedUser.password) {
            localStorage.setItem("Token", "sample_token");
            window.location.reload();
        } else {
            alert("Invalid credentials.");
        }
    };

    const handleRegister = () => {
        if (!username || !password) {
            alert("Fill in all fields.");
            return;
        }

        localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
        alert("Registered! You can now log in.");
        setShowRegister(false);
        setUsername("");
        setPassword("");
    };

    const handleLogout = () => {
        localStorage.removeItem("Token");
        window.location.reload();
    };

    return (
       <div className="h-[80vh] flex justify-center items-center  ">
           <div className="p-4 bg-blue-100 min-h-[25vh] border-b border-blue-300 rounded-2xl">
               <div className="flex justify-between items-center mb-4">
                   <h1 className="text-xl font-bold text-blue-700">My App</h1>
                   {isLoggedIn ? (
                       <button
                           onClick={handleLogout}
                           className="bg-red-500 text-white px-3 py-1 rounded"
                       >
                           Logout
                       </button>
                   ) : null}
               </div>

               {isLoggedIn ? (
                   <div className="flex gap-4">
                       {privateRoutes.map((route, index) => (
                           <Link key={index} href={route.path} className="text-blue-700 hover:underline">
                               {route.name}
                           </Link>
                       ))}
                   </div>
               ) : (
                   <div className="max-w-sm space-y-2">
                       <input
                           type="text"
                           placeholder="Username"
                           className="w-full px-3 py-2 border rounded"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                       />
                       <input
                           type="password"
                           placeholder="Password"
                           className="w-full px-3 py-2 border rounded"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                       />
                       {showRegister ? (
                           <>
                               <button
                                   onClick={handleRegister}
                                   className="w-full bg-green-600 text-white py-2 rounded"
                               >
                                   Register
                               </button>
                               <p className="text-sm text-center">
                                   Already have an account?{" "}
                                   <span
                                       className="text-blue-600 underline cursor-pointer"
                                       onClick={() => setShowRegister(false)}
                                   >
                                    Log in
                                </span>
                               </p>
                           </>
                       ) : (
                           <>
                               <button
                                   onClick={handleLogin}
                                   className="w-full bg-blue-600 text-white py-2 rounded"
                               >
                                   Login
                               </button>
                               <div className="text-sm text-center text-gray-600">
                                   <p>
                                       Forgot password?{" "}
                                       <span className="text-blue-600 underline cursor-pointer">
                                        Reset
                                    </span>
                                   </p>
                                   <p>
                                       Don’t have an account?{" "}
                                       <span
                                           className="text-blue-600 underline cursor-pointer"
                                           onClick={() => setShowRegister(true)}
                                       >
                                        Register
                                    </span>
                                   </p>
                               </div>
                           </>
                       )}
                   </div>
               )}
           </div>
       </div>
    );
};

export default Page;