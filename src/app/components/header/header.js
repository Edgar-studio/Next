"use client";

import React, { useEffect, useState } from "react";
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
        <header>
            {isLoggedIn && (
                <div className="flex items-center justify-between px-6 py-4 bg-blue-600 shadow-md h-[10vh]">
                    <nav className="flex gap-6">
                        {privateRoutes.map((route, index) => (
                            <Link
                                key={index}
                                href={route.path}
                                className="text-white font-medium hover:text-blue-200 transition-colors"
                            >
                                {route.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
                    >
                        Logout
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
