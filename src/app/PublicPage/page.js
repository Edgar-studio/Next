"use client";

import React, { useState } from "react";
import useAuth from "@/app/utils/useAuth";
import Input from "@/app/components/UI/Input";
import { useForm } from "react-hook-form";
import {
    emailValidation,
    passwordValidation,
    usernameValidation,
} from "@/app/utils/Validations";

const Page = () => {
    const [showRegister, setShowRegister] = useState(false);
    const { handleLogin, handleRegister } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmitRegister = (data) => {
        handleRegister(data);
    };

    const onSubmitLogin = (data) => {
        handleLogin(data);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('/images/background.jpg')]">
            <div className="w-[350px] p-6 border border-white bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white">
                {showRegister ? (
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmitRegister)}
                    >
                        <h1 className="text-2xl font-semibold text-center mb-2">Create Account</h1>

                        <Input
                            className="border-white bg-transparent placeholder:text-white"
                            type="text"
                            placeholder="Username"
                            register={register("username", usernameValidation)}
                            error={errors.username?.message}
                        />

                        <Input
                            className="border-white bg-transparent placeholder:text-white"
                            type="email"
                            placeholder="Email"
                            register={register("email", emailValidation)}
                            error={errors.email?.message}
                        />

                        <Input
                            className="border-white bg-transparent placeholder:text-white"
                            type="password"
                            placeholder="Password"
                            register={register("password", passwordValidation)}
                            error={errors.password?.message}
                        />

                        <button
                            type="submit"
                            className="mt-2 bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition"
                        >
                            Register
                        </button>
                        <p className="text-sm text-center">
                            Already have an account?{" "}
                            <button
                                type="button"
                                className="underline hover:text-gray-300"
                                onClick={() => setShowRegister(false)}
                            >
                                Login here
                            </button>
                        </p>
                    </form>
                ) : (
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmitLogin)}
                    >
                        <h1 className="text-2xl font-semibold text-center mb-2">Welcome Back</h1>

                        <Input
                            className="border-white bg-transparent placeholder:text-white"
                            type="email"
                            name="email"
                            placeholder="Email"
                            validation={emailValidation}
                            register={register}
                            error={errors.email && errors.email.message}
                        />

                        <Input
                            className="border-white bg-transparent placeholder:text-white"
                            type="password"
                            name="password"
                            placeholder="Password"
                            validation={passwordValidation}
                            register={register}
                            error={errors.password && errors.password.message}
                        />

                        <button
                            type="submit"
                            className="mt-2 bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition"
                        >
                            Login
                        </button>
                        <p className="text-sm text-center">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                className="text-white font-medium hover:bg-blue-500 transition-colors"
                                onClick={() => setShowRegister(true)}
                            >
                                Register here
                            </button>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Page;
