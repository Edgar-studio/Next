'use client';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("Token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        isLoggedIn && (
            <footer className="h-[10vh] bg-blue-600 text-white flex items-center justify-between px-6 shadow-inner">
                <p className="text-sm">© {new Date().getFullYear()} YourApp. All rights reserved.</p>
            </footer>
        )
    );
};

export default Footer;
