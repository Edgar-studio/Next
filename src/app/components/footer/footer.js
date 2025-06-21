'use client'
import React, {useEffect, useState} from 'react';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("Token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        isLoggedIn && (
        <div className="h-[10vh] bg-blue-400 ">
            asfcasfcascas
        </div>
        )
    );
};

export default Footer;