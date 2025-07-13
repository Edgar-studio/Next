"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/Toolkit/Slices/usersSlice";

export default function Home() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.list);
    const status = useSelector((state) => state.users.status);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Filter users by search term (case-insensitive)
    const filteredUsers = useMemo(() => {
        return users.filter((user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [users, searchTerm]);

    return (
        <div className=" bg-gradient-to-br from-white to-blue-50 p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-8 text-blue-700">User Directory</h1>

            <input
                type="search"
                aria-label="Search users"
                placeholder="Search users by username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md mb-8 px-4 py-3 rounded-lg border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            {status === "loading" && (
                <div
                    role="status"
                    aria-live="polite"
                    className="flex justify-center items-center space-x-2"
                >
                    <svg
                        className="animate-spin h-8 w-8 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                    <span className="text-xl text-blue-600 font-semibold">Loading...</span>
                </div>
            )}

            {status === "failed" && (
                <p className="text-red-600 text-lg font-semibold">Failed to load users.</p>
            )}

            {status === "success" && filteredUsers.length === 0 && (
                <p className="text-gray-600 text-lg italic">No users found.</p>
            )}

            {status === "success" && filteredUsers.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {filteredUsers.map((user) => (
                        <li
                            key={user.id}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                            tabIndex={0}
                            role="listitem"
                            aria-label={`User ${user.username}`}
                        >
                            <p className="text-lg font-semibold text-gray-800 truncate">{user.username}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
