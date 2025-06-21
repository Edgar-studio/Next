"use client";


import React, {useEffect, useState} from 'react';

const Page = () => {
    const [showRegister, setShowRegister] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let getUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(getUsers);
    }, [])

    function Show() {
        setShowRegister(() => !showRegister)
    }

    function handleLogin(e) {
        e.preventDefault();

       if(email && password){
           const findUser = users.find(user => user.password === password || user.email === email);
           if (findUser) {
               localStorage.setItem("Token", JSON.stringify(findUser.username));
           }else {
               alert("Please enter a valid email or password");
           }
       }else {
           alert("Input is datark")
       }
    }

    function handleRegister(e) {
        e.preventDefault();
        const findUser = users.find(user => user.username === username || user.email === email);
        if (!findUser) {
            if (username && email && password) {
                const newUser = {
                    username,
                    email,
                    password,
                }
                const updatedUsers = [...users, newUser]
                setUsers(updatedUsers)  ;
                localStorage.setItem("users", JSON.stringify(updatedUsers));
                console.log(users);
            }else{
                alert("Input is datark");
            }
        } else {
            alert("Username already exists");
        }

    }

    useEffect(() => {
        console.log(showRegister)
    }, [showRegister]);

    return (
        <div className="h-[80vh] flex justify-center items-center) bg-[url('/images/background.jpg')] ">
            <div className="p-4 bg-blue-100 min-h-[25vh] border-b border-blue-300 rounded-2xl">
                {showRegister === true ? (
                    <form
                        className="w-[300px] flex flex-col justify-center items-center gap-2"
                        action="" onSubmit={handleRegister}>
                        <h1>Register</h1>
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button type={"submit"}>Register</button>
                        <button onClick={Show}>Already have an account?</button>
                    </form>
                ) : (
                    <form

                        action="" onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button type={"submit"}>Login</button>
                        <button onClick={Show}>Don't have an account?</button>

                    </form>
                )}


            </div>
        </div>
    );
};

export default Page;