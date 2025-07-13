import React from 'react';

const Input = ({ name, register, validation, error, ...props }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <input
                {...register(name, validation)}
                className={`w-3/5 h-10 mt-3 px-4 py-2 rounded-md text-white 
          bg-gradient-to-r from-[#7d20f7] via-[#3958e3] to-[#3f0096] 
          placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200`}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-400 mt-1 w-3/5 text-center">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
