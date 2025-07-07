"use client";

import React, { useState } from 'react';
import useAuth from "@/app/utils/useAuth";
import Input from "@/app/components/UI/Input";
import { useForm } from "react-hook-form";
import { emailValidation, passwordValidation, usernameValidation } from "@/app/utils/Validations";

const Page = () => {
    const [showRegister, setShowRegister] = useState(false);
    const { handleLogin, handleRegister } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmitRegister = (data) => {
        handleRegister(data);
        reset();
    };

    const onSubmitLogin = (data) => {
        handleLogin(data);
        reset();
    };

    return (
        <div className="h-[100vh] flex justify-center items-center bg-[url('/images/background.jpg')]">
            <div className="p-4 border border-white backdrop-blur-sm h-[45vh] flex justify-center items-center rounded-2xl">
                {showRegister ? (
                    <form
                        className="w-[300px] flex flex-col justify-center items-center gap-2 text-white"
                        onSubmit={handleSubmit(onSubmitRegister)}
                    >
                        <h1>Register</h1>
                        <Input
                            className='border-2 border-white bg-transparent placeholder:text-white'
                            type="text"
                            placeholder="Username"
                            register={register("username", usernameValidation)}
                            error={errors.username?.message}
                        />
                        <Input
                            className='border-2 border-white bg-transparent placeholder:text-white'
                            type="email"
                            placeholder="Email"
                            register={register("email", emailValidation)}
                            error={errors.email?.message}
                        />
                        <Input
                            className='border-2 border-white bg-transparent placeholder:text-white'
                            type="password"
                            placeholder="Password"
                            register={register("password", passwordValidation)}
                            error={errors.password?.message}
                        />
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => setShowRegister(false)}>Already have an account?</button>
                    </form>
                ) : (
                    <form
                        className="w-[300px] flex flex-col justify-center items-center gap-4 text-white"
                        onSubmit={handleSubmit(onSubmitLogin)}
                    >
                        <h1>Login</h1>
                        <Input
                            className='border-2 border-white bg-transparent placeholder:text-white'
                            type="email"
                            placeholder="Email"
                            register={register("email", emailValidation)}
                            error={errors.email?.message}
                        />
                        <Input
                            className='border-2 border-white bg-transparent placeholder:text-white'
                            type="password"
                            placeholder="Password"
                            register={register("password", passwordValidation)}
                            error={errors.password?.message}
                        />
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => setShowRegister(true)}>Don't have an account?</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Page;
