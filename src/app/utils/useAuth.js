import React from 'react';
import axios from "axios";
import {notify} from "@/app/utils/notify";

const UseAuth = () => {
    async  function fetchUsers() {
        const response = await axios.get('http://localhost:4000/users');
        return response.data;
    }

    async function handleLogin(userInfo) {

        const oldUsers = await fetchUsers();
        const { email, password} = userInfo;

        if(email && password){
            const findUser = oldUsers.find(user => user.password === password || user.email === email);
            if (findUser) {
                localStorage.setItem("Token", JSON.stringify(findUser.username));
                window.location.reload();
            }else {
                alert("Please enter a valid email or password");
            }
        }else {
            notify("Input is datark")
        }
    }




    async function handleRegister(newUser) {

       const oldUsers = await fetchUsers();
       const {username, email, password} = newUser;
        const findUser = oldUsers.find(user => user.username === username || user.email === email);

        if (!findUser) {
            if (username && email && password) {

                const response = await axios.post('http://localhost:4000/users', newUser)
            }else{
                notify('datark')
            }
        } else {
            alert("Username already exists");
        }

    }
    return {handleLogin, handleRegister, fetchUsers}
};

export default UseAuth;