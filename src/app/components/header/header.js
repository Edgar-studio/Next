"use client";

import React, { useEffect, useState } from 'react';
import { privateRoutes } from "@/app/utils/routes";
import Link from "next/link";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("Token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("Token");
        window.location.reload();
    };
    return (
        <div>

            {isLoggedIn && (
                <div className="flex gap-4 h-[10vh] bg-blue-400">
                    {privateRoutes.map((route, index) => (
                        <Link key={index} href={route.path} className="text-blue-700 hover:underline">
                            {route.name}
                        </Link>
                    ))}

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                </div>


            )
            }
        </div>
    );
};

export default Header;
