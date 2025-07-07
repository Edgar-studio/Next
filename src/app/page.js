"use client"

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "@/Toolkit/Slices/usersSlice";


export default function Home() {
const dispatch = useDispatch();
const users = useSelector((state) => state.users.list);
const status  = useSelector((state) => state.users.status);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

return (
    <ul>
        {status === 'loading'
            ? (<span className="text-6xl">Loading</span>)

        : status === 'success' ? users.map((user) => (
            <li key={user.id}>
                {user.username}
            </li>
            )) : <span className="text-6xl">Failed</span>}
    </ul>
)}